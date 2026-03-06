import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSetupForm } from './user-setup-form';

describe('UserSetupForm', () => {
  let component: UserSetupForm;
  let fixture: ComponentFixture<UserSetupForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSetupForm],
    }).compileComponents();

    fixture = TestBed.createComponent(UserSetupForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
