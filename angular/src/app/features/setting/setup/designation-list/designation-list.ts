import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule, DxDataGridComponent, DxPopupModule, DxTextBoxModule, DxSelectBoxModule, DxSwitchModule, DxValidatorModule, DxBulletComponent, DxButtonModule } from 'devextreme-angular';
import { SharedModule } from '../../../../theme/shared/shared.module';

@Component({
  selector: 'app-designation-list',
  standalone: true,
  imports: [
    CommonModule, 
    DxDataGridModule, 
    SharedModule, 
    DxPopupModule, 
    DxTextBoxModule, 
    DxSelectBoxModule, 
    DxSwitchModule, 
    DxValidatorModule,
    DxButtonModule
  ],
  templateUrl: './designation-list.html',
  styleUrl: './designation-list.scss',
})
export class DesignationList {
  @ViewChild(DxDataGridComponent, { static: false }) grid!: DxDataGridComponent;

  isPopupVisible = false;
  departments = ['Sales', 'Inventory', 'Finance', 'Admin', 'Human Resources', 'Marketing'];
  
  newDesignation = {
    designation: '',
    department: 'Sales',
    status: true
  };
 currentShift: any = {};
  dataSource = [
    { id: 1, designation: 'Sales Manager', department: 'Sales', members: 7, createdOn: '24 Dec 2024', totalMembers: '07', status: 'Active' },
    { id: 2, designation: 'Inventory Manager', department: 'Inventory', members: 10, createdOn: '10 Dec 2024', totalMembers: '10', status: 'Active' },
    { id: 3, designation: 'Accountant', department: 'Finance', members: 5, createdOn: '27 Nov 2024', totalMembers: '05', status: 'Active' },
    { id: 4, designation: 'System Administrator', department: 'Admin', members: 10, createdOn: '18 Nov 2024', totalMembers: '10', status: 'Active' },
    { id: 5, designation: 'HR Manager', department: 'Human Resources', members: 6, createdOn: '06 Nov 2024', totalMembers: '06', status: 'Active' },
    { id: 6, designation: 'Marketing Manager', department: 'Marketing', members: 12, createdOn: '25 Oct 2024', totalMembers: '12', status: 'Active' }
  ];

  onToolbarPreparing(e: any) {
    e.toolbarOptions.items = e.toolbarOptions.items.filter((item: any) => 
      item.name !== 'addRowButton' && 
      item.name !== 'exportButton' &&
      item.name !== 'searchPanel'
    );
  }

  exportExcel() {
    console.log('Exporting designations to Excel...');
  }

  showAddPopup() {
    this.newDesignation = {
      designation: '',
      department: 'Sales',
      status: true
    };
    this.isPopupVisible = true;
  }

  // onFormSubmit(e: any) {
  //   // Logic to save designation
  //   const designationToAdd = {
  //     ...this.newDesignation,
  //     id: this.dataSource.length + 1,
  //     members: 0,
  //     createdOn: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
  //     totalMembers: '00',
  //     status: this.newDesignation.status ? 'Active' : 'Inactive'
  //   };
    
  //   this.dataSource = [...this.dataSource, designationToAdd as any];
  //   this.isPopupVisible = false;
  // }

  // onFormCancel() {
  //   this.isPopupVisible = false;
  // }

    handleSave() {
    // Implement save logic here
    this.isPopupVisible = false;
  }

  handleCancel() {
    this.isPopupVisible = false;
  }
}
