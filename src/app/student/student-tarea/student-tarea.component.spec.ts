import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTareaComponent } from './student-tarea.component';

describe('StudentTareaComponent', () => {
  let component: StudentTareaComponent;
  let fixture: ComponentFixture<StudentTareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
