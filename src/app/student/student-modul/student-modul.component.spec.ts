import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentModulComponent } from './student-modul.component';

describe('StudentModulComponent', () => {
  let component: StudentModulComponent;
  let fixture: ComponentFixture<StudentModulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentModulComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentModulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
