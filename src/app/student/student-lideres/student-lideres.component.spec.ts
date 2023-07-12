import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLideresComponent } from './student-lideres.component';

describe('StudentLideresComponent', () => {
  let component: StudentLideresComponent;
  let fixture: ComponentFixture<StudentLideresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentLideresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLideresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
