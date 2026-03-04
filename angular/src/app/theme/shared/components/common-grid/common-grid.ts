import { Component, Input, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
import { DxTemplateHost } from 'devextreme-angular/core';

export interface GridColumn {
  dataField: string;
  caption: string;
  alignment?: 'left' | 'center' | 'right';
  allowSorting?: boolean;
  cellTemplate?: string;
  width?: number | string;
  dataType?: 'string' | 'number' | 'date' | 'boolean' | 'datetime';
  format?: any;
}

@Component({
  selector: 'app-common-grid',
  standalone: true,
  imports: [CommonModule, DxDataGridModule],
  templateUrl: './common-grid.html',
  styleUrl: './common-grid.scss',
  providers: [DxTemplateHost]
})
export class CommonGridComponent {
  @Input() dataSource: any[] = [];
  @Input() columns: GridColumn[] = [];
  @Input() keyExpr: string = 'id';
  @Input() showBorders: boolean = true;
  @Input() allowColumnResizing: boolean = true;
  @Input() columnAutoWidth: boolean = true;
  @Input() rowAlternationEnabled: boolean = false;
  @Input() className: string = 'premium-grid';
  @Input() pageSize: number = 10;
  @Input() selectionMode: 'none' | 'single' | 'multiple' = 'none';
  
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  constructor(host: DxTemplateHost) {
    host.setHost(this);
  }

  setTemplate(template: any) {
    if (this.dataGrid) {
      this.dataGrid.setTemplate(template);
    }
  }
}
