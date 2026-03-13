// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { GuestComponent } from './theme/layout/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/analytics',
        pathMatch: 'full'
      },
      {
        path: 'setting/user-setup',
        loadComponent: () => import('./features/user-setup-form/user-setup-form').then((c) => c.UserSetupForm)
      },
      {
        path: 'analytics',
        loadComponent: () => import('./demo/dashboard/dash-analytics.component').then((c) => c.DashAnalyticsComponent)
      },
      {
        path: 'component',
        loadChildren: () => import('./demo/ui-element/ui-basic.module').then((m) => m.UiBasicModule)
      },
      {
        path: 'setting/setup/user-list',
        loadComponent: () => import('./features/setting/setup/user-list/user-list.component').then((c) => c.UserListComponent)
      },
      {
        path: 'setting/setup/branch-list',
        loadComponent: () => import('./features/setting/setup/branch-list/branch-list').then((c) => c.BranchList)
      },
      {
        path: 'setting/setup/department-list',
        loadComponent: () => import('./features/setting/setup/department-list/department-list').then((c) => c.DepartmentList)
      },
      {
        path: 'setting/setup/shift-list',
        loadComponent: () => import('./features/setting/setup/shift-list/shift-list.component').then((c) => c.ShiftListComponent)
      },
      {
        path: 'setting/setup/designation-list',
        loadComponent: () => import('./features/setting/setup/designation-list/designation-list').then((c) => c.DesignationList)
      },
      {
        path: 'employee/employeeinfo',
        loadComponent: () =>
          import('./features/employee/employeeinfo/employeeinfo').then((c) => c.Employeeinfo)
      },
      // {
      //   path: 'employee/attendance-calculation',
      //   loadComponent: () =>
      //     import('./features/attendance/attendance-calculation/attendance-calculation').then((c) => c.AttendanceCalculation)
      // },
      {
        path: 'attendance/fingerprint-upload',
        loadComponent: () =>
          import('./features/attendance/employee-fingerprint-upload/employee-fingerprint-upload').then((c) => c.EmployeeFingerprintUpload)
      },
      {
        path: 'attendance/attendance-calculation',
        loadComponent: () =>
          import('./features/attendance/attendance-calculation/attendance-calculation').then((c) => c.AttendanceCalculation)
      },
      {
        path: 'chart',
        loadComponent: () => import('./demo/chart-maps/core-apex.component').then((c) => c.CoreApexComponent)
      },
      {
        path: 'forms',
        loadComponent: () => import('./demo/forms/form-elements/form-elements.component').then((c) => c.FormElementsComponent)
      },
      {
        path: 'tables',
        loadComponent: () => import('./demo/tables/tbl-bootstrap/tbl-bootstrap.component').then((c) => c.TblBootstrapComponent)
      },
      {
        path: 'sample-page',
        loadComponent: () => import('./demo/other/sample-page/sample-page.component').then((c) => c.SamplePageComponent)
      }
    ]
  },
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: 'register',
        loadComponent: () => import('./demo/pages/authentication/sign-up/sign-up.component').then((c) => c.SignUpComponent)
      },
      {
        path: 'login',
        loadComponent: () => import('./demo/pages/authentication/sign-in/sign-in.component').then((c) => c.SignInComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
