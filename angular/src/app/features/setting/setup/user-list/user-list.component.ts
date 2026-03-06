import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../theme/shared/shared.module';
import { DxDataGridComponent, DxDataGridModule } from 'devextreme-angular';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, SharedModule, DxDataGridModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  dataSource = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'Inactive' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', role: 'Viewer', status: 'Active' }
  ];

  roles = ['Admin', 'Editor', 'Viewer'];
  statuses = ['Active', 'Inactive'];

  @ViewChild(DxDataGridComponent, { static: false }) grid!: DxDataGridComponent;

  currentPassword = '';

  passwordComparison = (e: any) => {
    return e.value === this.currentPassword;
  };

  currentRowKey: any;

  onEditingStart(e: any) {
    this.currentRowKey = e.key;
    this.currentPassword = e.data.password || '';
  }

  onInitNewRow(e: any) {
    this.currentRowKey = undefined;
    this.currentPassword = '';
  }

  onEditorPreparing(e: any) {
    if (e.parentType === 'dataRow' && (e.dataField === 'password' || e.dataField === 'confirmPassword')) {
      e.editorOptions.disabled = e.row ? !e.row.isNewRow : false;

      // Track password value changes to compare with confirm password
      if (e.dataField === 'password' && (!e.row || e.row.isNewRow)) {
        const standardHandler = e.editorOptions.onValueChanged;
        e.editorOptions.onValueChanged = (args: any) => {
          this.currentPassword = args.value;
          if (standardHandler) {
            standardHandler(args);
          } else {
            e.setValue(args.value);
          }
        };
      }
    }
  }

  customizePasswordText(e: any) {
    return e.value ? '••••••••' : '';
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
    console.log('Exporting user list to Excel...');
  }
}
