import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../theme/shared/shared.module';
import {
  DxDataGridComponent,
  DxDataGridModule,
  DxDateBoxModule,
  DxTextBoxModule,
  DxPopupModule,
  DxTabPanelModule,
  DxCheckBoxModule,
  DxSelectBoxModule,
  DxSwitchModule,
  DxButtonModule
} from 'devextreme-angular';

@Component({
  selector: 'app-shift-list',
  standalone: true,
  imports: [
    CommonModule,
    SharedModule,
    DxDataGridModule,
    DxDateBoxModule,
    DxTextBoxModule,
    DxPopupModule,
    DxTabPanelModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    DxSwitchModule,
    DxButtonModule
  ],
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss']
})
export class ShiftListComponent {
  @ViewChild(DxDataGridComponent, { static: false }) grid!: DxDataGridComponent;
  hideHeader: boolean = false;
  isPopupVisible = false;
  currentShift: any = {};

  weekDays = [
    { name: 'Monday', enabled: true, all: false, w1: false, w2: false, w3: false, w4: false, w5: false },
    { name: 'Tuesday', enabled: false, all: false, w1: false, w2: false, w3: false, w4: false, w5: false },
    { name: 'Wednesday', enabled: false, all: false, w1: false, w2: false, w3: false, w4: false, w5: false },
    { name: 'Thursday', enabled: false, all: false, w1: false, w2: false, w3: false, w4: false, w5: false },
    { name: 'Friday', enabled: false, all: false, w1: false, w2: false, w3: false, w4: false, w5: false },
    { name: 'Saturday', enabled: false, all: false, w1: false, w2: false, w3: false, w4: false, w5: false },
    { name: 'Sunday', enabled: false, all: false, w1: false, w2: false, w3: false, w4: false, w5: false }
  ];

  weekOffOptions = ['None', 'Sunday', 'Saturday', 'Monday-Friday'];

  dataSource = [
    {
      id: 1,
      shiftName: 'Fixed',
      inTime: '09:00',
      outTime: '18:00',
      morningInTime: '09:00',
      morningOutTime: '13:00',
      eveningInTime: '14:00',
      eveningOutTime: '18:00',
      weekOff: 'Sunday, Monday',
      createdOn: '2024-08-04',
      status: 'Active'
    },
    {
      id: 2,
      shiftName: 'Rotating',
      inTime: '06:00',
      outTime: '15:00',
      morningInTime: '06:00',
      morningOutTime: '10:00',
      eveningInTime: '11:00',
      eveningOutTime: '15:00',
      weekOff: 'Saturday, Sunday',
      createdOn: '2024-07-21',
      status: 'Active'
    },
    {
      id: 3,
      shiftName: 'Split',
      inTime: '03:00',
      outTime: '21:00',
      morningInTime: '03:00',
      morningOutTime: '09:00',
      eveningInTime: '15:00',
      eveningOutTime: '21:00',
      weekOff: 'Tuesday, Saturday',
      createdOn: '2024-01-31',
      status: 'Active'
    }
  ];

  onToolbarPreparing(e: any) {
    const toolbarItems = e.toolbarOptions.items;

    // Add Search Panel to the left
    toolbarItems.unshift({
      location: 'before',
      template: 'searchTemplate'
    });

    // Add Export buttons to the right
    toolbarItems.push({
      location: 'after',
      widget: 'dxButton',
      options: {
        icon: 'exportpdf',
        hint: 'Export to PDF',
        onClick: () => { /* Implement PDF export */ }
      }
    });

    toolbarItems.push({
      location: 'after',
      widget: 'dxButton',
      options: {
        icon: 'exportxlsx',
        hint: 'Export to Excel',
        onClick: () => { /* Implement Excel export */ }
      }
    });

    toolbarItems.push({
      location: 'after',
      widget: 'dxButton',
      options: {
        icon: 'refresh',
        hint: 'Refresh',
        onClick: () => this.grid.instance.refresh()
      }
    });

    // Customize Add Button
    const addRowItem = toolbarItems.find((item: any) => item.name === 'addRowButton');
    if (addRowItem) {
      addRowItem.location = 'after';
      addRowItem.showText = 'always';
      addRowItem.options.text = 'Add Shift';
      addRowItem.options.icon = 'plus';
      addRowItem.options.type = 'button';
      addRowItem.options.stylingMode = 'contained';
      addRowItem.options.elementAttr = { class: 'primary' };
      addRowItem.options.onClick = () => this.onAddShift(); // Call custom method
    }
  }

  onAddShift() {
    this.currentShift = {
      status: 'Active',
      recurring: false
    };
    this.isPopupVisible = true;
  }

  handleSave() {
    // Implement save logic here
    console.log('Saving shift:', this.currentShift, this.weekDays);
    this.isPopupVisible = false;
  }

  handleCancel() {
    this.isPopupVisible = false;
  }
}
