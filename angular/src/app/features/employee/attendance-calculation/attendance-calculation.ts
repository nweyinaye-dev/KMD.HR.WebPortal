import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  DxSelectBoxModule, 
  DxButtonModule, 
  DxDataGridModule,
  DxTextBoxModule,
  DxDateRangeBoxModule,
  DxDateBoxModule
} from 'devextreme-angular';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-attendance-calculation',
  imports: [
    CommonModule, 
    DxSelectBoxModule, 
    DxButtonModule, 
    DxDataGridModule, 
    DxTextBoxModule,
    DxDateRangeBoxModule,
    DxDateBoxModule,
    SharedModule
  ],
  templateUrl: './attendance-calculation.html',
  styleUrl: './attendance-calculation.scss'
})
export class AttendanceCalculation {

  // --- Filter options ---
  
  departments = ['IT', 'HR', 'Finance', 'Marketing', 'Sales'];
  employees = ['Aung Aung', 'Kyaw Kyaw', 'Mya Mya', 'Zarni', 'Htet Htet'];
  
  fromDate: Date = new Date(2024, 8, 1); // Default to Sept 1, 2024
  toDate: Date = new Date();
  
  pageSize = 10;

  resultData: any[] = [
    { 
      id: 1, 
      employee: 'Aung Aung',
      date: '02 Sep 2024', 
      checkIn: '09:12 AM', 
      status: 'Present', 
      checkOut: '09:17 PM', 
      break: '14 Min', 
      late: '12 Min', 
      overtime: '-', 
      productionHours: '8.35Hrs',
      productionStatus: 'success'
    },
    { 
      id: 2, 
      employee: 'Kyaw Kyaw',
      date: '06 Jul 2024', 
      checkIn: '09:00 AM', 
      status: 'Present', 
      checkOut: '07:13 PM', 
      break: '32 Min', 
      late: '-', 
      overtime: '75 Min', 
      productionHours: '9.15 Hrs',
      productionStatus: 'primary'
    },
    { 
      id: 3, 
      employee: 'Mya Mya',
      date: '10 Dec 2024', 
      checkIn: '-', 
      status: 'Absent', 
      checkOut: '-', 
      break: '-', 
      late: '-', 
      overtime: '-', 
      productionHours: '0.00 Hrs',
      productionStatus: 'danger'
    },
    { 
      id: 4, 
      employee: 'Zarni',
      date: '12 Apr 2024', 
      checkIn: '09:00 AM', 
      status: 'Present', 
      checkOut: '06:43 PM', 
      break: '23 Min', 
      late: '-', 
      overtime: '10 Min', 
      productionHours: '8.22 Hrs',
      productionStatus: 'success'
    },
    { 
      id: 5, 
      employee: 'Htet Htet',
      date: '14 Jan 2024', 
      checkIn: '09:32 AM', 
      status: 'Present', 
      checkOut: '06:45 PM', 
      break: '30 Min', 
      late: '32 Min', 
      overtime: '20 Min', 
      productionHours: '8.55 Hrs',
      productionStatus: 'success'
    }
  ];

  constructor() {}

  getStatusClass(status: string): string {
    return status?.toLowerCase() || '';
  }

  onCalculate() {
    // API logic here
  }

  onReset() {
    this.resultData = [];
  }
}
