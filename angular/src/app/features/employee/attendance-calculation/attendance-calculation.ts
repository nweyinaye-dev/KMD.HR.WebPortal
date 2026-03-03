import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxSelectBoxModule, DxButtonModule, DxDataGridModule, DxDateRangeBoxModule, DxTextBoxModule } from 'devextreme-angular';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-attendance-calculation',
  imports: [CommonModule, DxSelectBoxModule, DxButtonModule, DxDataGridModule, DxDateRangeBoxModule, DxTextBoxModule, SharedModule],
  templateUrl: './attendance-calculation.html',
  styleUrl: './attendance-calculation.scss'
})
export class AttendanceCalculation {
  // --- Filter options ---
  statuses = ['Present', 'Absent', 'Late', 'On Leave'];
  sortOptions = ['Last 7 Days', 'Last 30 Days', 'Current Month'];

  // Date Range
  initialValue: [Date, Date] = [
    new Date(2026, 1, 25), // Feb 25, 2026
    new Date(2026, 2, 3) // Mar 3, 2026
  ];

  pageSize = 10;

  // --- Result grid data ---
  resultData: any[] = [
    {
      id: 1,
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
    return status.toLowerCase();
  }

  onCalculate() {
    // This would normally trigger an API call
  }

  onReset() {
    this.resultData = [];
  }
}
