import { Component } from '@angular/core';
import { DxFileUploaderModule } from 'devextreme-angular';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-employee-fingerprint-upload',
  imports: [DxFileUploaderModule, SharedModule],
  templateUrl: './employee-fingerprint-upload.html',
  styleUrl: './employee-fingerprint-upload.scss'
})
export class EmployeeFingerprintUpload {
  selectedFiles: File[] = [];

  onFilesSelected(e: any) {
    this.selectedFiles = e.value;
    console.log('Selected files:', this.selectedFiles);
  }
}
