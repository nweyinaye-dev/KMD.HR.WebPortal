import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule, DxTextBoxModule, DxSelectBoxModule, DxDateBoxModule } from 'devextreme-angular';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

export interface FilterConfig {
  type: 'select' | 'date';
  dataField: string;
  label: string;
  placeholder?: string;
  items?: any[]; // For select type
  value?: any;
  width?: number | string;
}

@Component({
  selector: 'app-grid-accordion',
  standalone: true,
  imports: [CommonModule, DxButtonModule, DxTextBoxModule, DxSelectBoxModule, DxDateBoxModule, NgbAccordionModule],
  templateUrl: './grid-accordion.component.html',
  styleUrl: './grid-accordion.component.scss'
})
export class GridAccordionComponent {
  @Input() title: string = 'Actions & Filters';
  @Input() collapsed: boolean = false;
  @Input() showSearch: boolean = true;
  @Input() searchPlaceholder: string = 'Search...';
  @Input() showNew: boolean = true;
  @Input() newButtonText: string = 'New';
  @Input() showRefresh: boolean = true;
  @Input() showExportExcel: boolean = true;
  @Input() showExportPDF: boolean = true;
  @Input() filters: FilterConfig[] = [];

  @Output() onSearch = new EventEmitter<string>();
  @Output() onNew = new EventEmitter<void>();
  @Output() onExportExcel = new EventEmitter<void>();
  @Output() onExportPDF = new EventEmitter<void>();
  @Output() onRefresh = new EventEmitter<void>();
  @Output() onFilterChange = new EventEmitter<{ dataField: string, value: any }>();

  handleFilterChange(filter: FilterConfig, event: any) {
    this.onFilterChange.emit({ dataField: filter.dataField, value: event.value });
  }
}
