import { Component } from '@angular/core';
import { DxDataGridModule, DxButtonModule, DxTextBoxModule, DxSelectBoxModule } from 'devextreme-angular';
import { SharedModule } from 'src/app/theme/shared/shared.module';

export interface Department {
  id: number;
  code: string;
  name: string;
  isActive: boolean;
  managerId: number | null;
}

@Component({
  selector: 'app-department-list',
  imports: [SharedModule, DxDataGridModule, DxButtonModule, DxTextBoxModule, DxSelectBoxModule],
  templateUrl: './department-list.html',
  styleUrl: './department-list.scss'
})
export class DepartmentList {
  keyExpr = 'id';

  departments: Department[] = [
    { id: 1, code: 'IT', name: 'Information Technology', isActive: true, managerId: 101 },
    { id: 2, code: 'HR', name: 'Human Resources', isActive: true, managerId: 102 },
    { id: 3, code: 'FN', name: 'Finance', isActive: true, managerId: 103 },
    { id: 4, code: 'MK', name: 'Marketing', isActive: false, managerId: 104 },
    { id: 5, code: 'OP', name: 'Operations', isActive: true, managerId: 105 }
  ];

  activeOptions = [
    { value: true, text: 'Active' },
    { value: false, text: 'Inactive' }
  ];

  private refreshView(): void {
    this.departments = [...this.departments];
  }

  onRowUpdating(e: any): void {
    const updated = { ...e.oldData, ...e.newData };
    const idx = this.departments.findIndex((x) => x.id === updated.id);
    if (idx > -1) {
      this.departments[idx] = updated;
      this.refreshView();
    }
  }

  onRowInserted(e: any): void {
    const id = Date.now();
    const item: Department = { id, ...e.data, managerId: e.data.managerId || null };
    this.departments.unshift(item);
    this.refreshView();
  }

  onRowRemoving(e: any): void {
    const id = e.data.id;
    const idx = this.departments.findIndex((x) => x.id === id);
    if (idx > -1) {
      this.departments.splice(idx, 1);
      this.refreshView();
    }
  }

  onAddClick(): void {
    console.log('Add department clicked');
  }

  onRefreshClick(): void {
    this.refreshView();
  }
}
