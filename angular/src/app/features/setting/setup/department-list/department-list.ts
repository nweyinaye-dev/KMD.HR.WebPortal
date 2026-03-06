import { Component, ViewChild } from '@angular/core';
import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
import { SharedModule } from '../../../../theme/shared/shared.module';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [DxDataGridModule, SharedModule],
  templateUrl: './department-list.html',
  styleUrl: './department-list.scss'
})
export class DepartmentList {
  @ViewChild(DxDataGridComponent, { static: false }) grid!: DxDataGridComponent;
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
    // Toolbar items are now handled in the accordion
    e.toolbarOptions.items = e.toolbarOptions.items.filter((item: any) => 
      item.name !== 'addRowButton' && 
      item.name !== 'exportButton' &&
      item.name !== 'searchPanel'
    );
  }

  exportExcel() {
    // Implement Excel export logic
    console.log('Exporting departments to Excel...');
  }
}
