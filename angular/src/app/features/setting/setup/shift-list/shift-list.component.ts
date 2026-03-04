import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../theme/shared/shared.module';
import { DxDataGridComponent, DxDataGridModule, DxDateBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-shift-list',
  standalone: true,
  imports: [CommonModule, SharedModule, DxDataGridModule,DxDateBoxModule],
  templateUrl: './shift-list.component.html',
  styleUrls: ['./shift-list.component.scss']
})
export class ShiftListComponent {
  @ViewChild(DxDataGridComponent, { static: false }) grid!: DxDataGridComponent;

  dataSource = [
    {
      id: 1,
      shiftName: 'Day Shift',
      inTime: '08:00',
      outTime: '17:00',
      morningInTime: '08:00',
      morningOutTime: '12:00',
      eveningInTime: '13:00',
      eveningOutTime: '17:00'
    },
    {
      id: 2,
      shiftName: 'Night Shift',
      inTime: '20:00',
      outTime: '05:00',
      morningInTime: '20:00',
      morningOutTime: '00:00',
      eveningInTime: '01:00',
      eveningOutTime: '05:00'
    }
  ];

  onToolbarPreparing(e: any) {
    const toolbarItems = e.toolbarOptions.items;
    const addRowItem = toolbarItems.find((item: any) => item.name === 'addRowButton');
    if (addRowItem) {
      addRowItem.showText = 'always';
      addRowItem.options.text = 'New';
      addRowItem.options.icon = 'plus';
      addRowItem.options.type = 'default';
      addRowItem.options.stylingMode = 'contained';
    }
  }
}
