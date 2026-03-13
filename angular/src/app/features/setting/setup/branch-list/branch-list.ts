import { Component, ViewChild } from '@angular/core';
import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
import { SharedModule } from '../../../../theme/shared/shared.module';

@Component({
  selector: 'app-branch-list',
  imports: [DxDataGridModule, SharedModule],
  templateUrl: './branch-list.html',
  styleUrl: './branch-list.scss'
})
export class BranchList {
  @ViewChild(DxDataGridComponent, { static: false }) grid!: DxDataGridComponent;
  dataSource = [
    { id: 1, branchCode: 'BR001', branchName: 'Head Office', address: '123 Main Street', branchType: 'Head Office' },
    { id: 2, branchCode: 'BR002', branchName: 'Branch A', address: '456 Oak Avenue', branchType: 'Regional' },
    { id: 3, branchCode: 'BR003', branchName: 'Branch B', address: '789 Pine Road', branchType: 'Local' }
  ];
  types = ['Main', 'Shop'];

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
}
