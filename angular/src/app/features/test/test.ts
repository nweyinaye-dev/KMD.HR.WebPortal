import { Component } from '@angular/core';
import {
  DxDataGridModule,
  DxButtonModule,
  DxTextBoxModule
} from 'devextreme-angular';
import { SharedModule } from 'src/app/theme/shared/shared.module';

interface Department {
  id: number;
  name: string;
}

@Component({
  selector: 'app-test',
  imports: [SharedModule, DxDataGridModule, DxButtonModule, DxTextBoxModule],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test {
     keyExpr = 'ID';
  employees: any[] = [
    { ID: 1, Prefix: 'Mr.', FirstName: 'John', LastName: 'Heart', Position: 'CEO', State: 'California', BirthDate: new Date(1964, 2, 16) },
    { ID: 2, Prefix: 'Mrs.', FirstName: 'Olivia', LastName: 'Peyton', Position: 'Sales Assistant', State: 'California', BirthDate: new Date(1981, 5, 3) },
    { ID: 3, Prefix: 'Mr.', FirstName: 'Robert', LastName: 'Reagan', Position: 'CMO', State: 'Arkansas', BirthDate: new Date(1974, 7, 7) }
  ];

  private refreshView() {
    // trigger change detection for dx-data-grid
    this.employees = [...this.employees];
  }

  onRowUpdating(e: any) {
    const updated = { ...e.oldData, ...e.newData };
    const idx = this.employees.findIndex(x => x.ID === updated.ID);
    if (idx > -1) {
      this.employees[idx] = updated;
      this.refreshView();
    }
  }

  onRowInserted(e: any) {
    const id = Date.now();
    const item = { ID: id, ...e.data };
    this.employees.unshift(item);
    this.refreshView();
  }

  onRowRemoving(e: any) {
    const id = e.data.ID;
    const idx = this.employees.findIndex(x => x.ID === id);
    if (idx > -1) {
      this.employees.splice(idx, 1);
      this.refreshView();
    }
  }
}
