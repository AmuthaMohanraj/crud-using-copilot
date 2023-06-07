import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempFormComponent } from './temp-form.component';

describe('TempFormComponent', () => {
  let component: TempFormComponent;
  let fixture: ComponentFixture<TempFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TempFormComponent]
    });
    fixture = TestBed.createComponent(TempFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
