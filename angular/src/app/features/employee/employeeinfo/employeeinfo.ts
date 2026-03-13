import { Component, ViewChild } from '@angular/core';
import { DxDataGridModule, DxDataGridComponent, DxPopupModule, DxTabPanelModule, DxTextBoxModule, DxDateBoxModule, DxSelectBoxModule, DxTextAreaModule, DxButtonModule } from 'devextreme-angular';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employeeinfo',
    imports: [
      DxDataGridModule, 
      SharedModule, 
      DxPopupModule, 
      DxTabPanelModule, 
      DxTextBoxModule, 
      DxDateBoxModule, 
      DxSelectBoxModule, 
      DxTextAreaModule, 
      DxButtonModule,
      CommonModule
    ],
  templateUrl: './employeeinfo.html',
  styleUrl: './employeeinfo.scss',
})
export class Employeeinfo {
  @ViewChild(DxDataGridComponent, { static: false }) grid!: DxDataGridComponent;
  
  employeeData: any = {};
  
  departments = [
    { id: 1, name: 'IT' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'Finance' },
    { id: 4, name: 'Marketing' }
  ];

  designations = [
    { id: 1, name: 'Senior Developer' },
    { id: 2, name: 'HR Manager' },
    { id: 3, name: 'Accountant' },
    { id: 4, name: 'Graphic Designer' }
  ];

  companies = [
    { id: 1, name: 'KMD Group' },
    { id: 2, name: 'Partner Co.' }
  ];
  dataSource = [
    { id: 'Emp-001', Name: 'Nwe Yin Aye', branchName: 'Head Office', email: 'nya@gmail.com', phone: '09977722801',designation :'Developer',joinDate:'2025-10-12',status:'Active' },
    { id: 'Emp-002', Name: 'Shwe Yi', branchName: 'Head Office', email: 'nya@gmail.com', phone: '09977722801', designation: 'Developer', joinDate: '2025-10-12', status: 'Inactive' },
    { id: 'Emp-003', Name: 'Tin Myo Thu', branchName: 'Head Office', email: 'nya@gmail.com', phone: '09977722801',designation :'Developer',joinDate:'2025-10-12',status:'Active' },
  ];
  types = ['Main', 'Shop'];
  isPopupVisible = false;
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
    console.log('Exporting branches to Excel...');
  }
    getStatusClass(status: string): string {
    return status?.toLowerCase() || '';
  }

    onAddEmployee() {  
    this.employeeData = {};
    this.isPopupVisible = true;
  }

  onSave() {
    console.log('Saving employee data:', this.employeeData);
    this.isPopupVisible = false;
  }

  onCancel() {
    this.isPopupVisible = false;
  }
}
