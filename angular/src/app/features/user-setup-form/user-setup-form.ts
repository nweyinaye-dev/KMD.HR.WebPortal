import { Component } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';

export interface Branch {
  id: string;
  name: string;
}

export interface Role {
  id: string;
  name: string;
}

@Component({
  selector: 'app-user-setup-form',
  imports: [SharedModule],
  templateUrl: './user-setup-form.html',
  styleUrl: './user-setup-form.scss',
})
export class UserSetupForm {
  username = '';
  password = '';
  confirmPassword = '';
  selectedBranchId: string | null = null;
  selectedRoleId: string | null = null;

  branches: Branch[] = [
    { id: '1', name: 'Branch A' },
    { id: '2', name: 'Branch B' },
    { id: '3', name: 'Branch C' },
  ];

  roles: Role[] = [
    { id: '1', name: 'Admin' },
    { id: '2', name: 'Manager' },
    { id: '3', name: 'User' },
  ];

  get passwordMismatch(): boolean {
    return !!(
      this.confirmPassword &&
      this.password !== this.confirmPassword
    );
  }

  onSubmit(): void {
    if (this.passwordMismatch) return;
    // TODO: call API to create/update user
    console.log('User setup', {
      username: this.username,
      branchId: this.selectedBranchId,
      roleId: this.selectedRoleId,
    });
  }

  onCancel(): void {
    this.username = '';
    this.password = '';
    this.confirmPassword = '';
    this.selectedBranchId = null;
    this.selectedRoleId = null;
  }
}
