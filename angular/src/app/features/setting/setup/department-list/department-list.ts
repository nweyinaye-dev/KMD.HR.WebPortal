import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';

@Component({
  selector: 'app-department-list',
  imports: [DxDataGridModule],
  templateUrl: './department-list.html',
  styleUrl: './department-list.scss'
})
export class DepartmentList {
  dataSource = [
    { id: 1, deptCode: 'D001', deptName: 'Human Resources', deptShort: 'HR' },
    { id: 2, deptCode: 'D002', deptName: 'Finance', deptShort: 'FIN' },
    { id: 3, deptCode: 'D003', deptName: 'Information Technology', deptShort: 'IT' }
  ];

  currentRowKey: any;

  onEditingStart(e: any) {
    this.currentRowKey = e.key;
  }

  onInitNewRow(e: any) {
    this.currentRowKey = undefined;
  }

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
