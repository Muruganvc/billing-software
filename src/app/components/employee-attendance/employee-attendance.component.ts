import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-attendance',
  standalone: true,
  imports: [MatCheckboxModule, MatTableModule, FormsModule, MatCardModule, MatFormFieldModule, MatIconModule],
  templateUrl: './employee-attendance.component.html',
  styleUrl: './employee-attendance.component.css',
  providers: [DatePipe]
})
export class EmployeeAttendanceComponent implements OnInit {
  formattedDate: string | null;
  currentWeek: number | undefined;
  constructor(private datePipe: DatePipe) {
    this.formattedDate = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
  }
  ngOnInit(): void {
    this.currentWeek = this.getWeekNumber(new Date());
    console.log('Week number:', this.currentWeek);
  }



  displayedColumns: string[] = ['name', 'present', 'halfDay', 'fullDay', 'action'];
  employees = [
    { name: 'Muruganvc', attendance: { present: false, halfDay: false, fullDay: false, action: 'action' } },
    { name: 'Gokul', attendance: { present: false, halfDay: false, fullDay: false, action: 'action' } },
    { name: 'Poovarasan', attendance: { present: false, halfDay: false, fullDay: false, action: 'action' } },
    { name: 'Kalaiyasaran', attendance: { present: false, halfDay: false, fullDay: false, action: 'action' } },
  ];
  onCheckboxChange(employee: any, selectedType: string) {
    Object.keys(employee.attendance).forEach(type => {
      employee.attendance[type] = (type === selectedType);
    });
  }

  getWeekNumber(date: Date): number {
    const target = new Date(date.valueOf());
    const dayNr = (target.getDay() + 6) % 7;
    target.setDate(target.getDate() - dayNr + 3);
    const firstThursday = new Date(target.getFullYear(), 0, 4);
    const diff = target.getTime() - firstThursday.getTime();
    return 1 + Math.round(diff / (7 * 24 * 60 * 60 * 1000));
  }

}
