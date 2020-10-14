import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherRegFormComponent } from './teacher-reg-form.component';

describe('TeacherRegFormComponent', () => {
  let component: TeacherRegFormComponent;
  let fixture: ComponentFixture<TeacherRegFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacherRegFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherRegFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
