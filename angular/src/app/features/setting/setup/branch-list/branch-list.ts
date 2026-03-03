import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';

@Component({
  selector: 'app-branch-list',
  imports: [DxDataGridModule],
  templateUrl: './branch-list.html',
  styleUrl: './branch-list.scss'
})
export class BranchList {
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
