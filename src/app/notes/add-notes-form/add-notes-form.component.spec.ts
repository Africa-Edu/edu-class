import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotesFormComponent } from './add-notes-form.component';

describe('AddNotesFormComponent', () => {
  let component: AddNotesFormComponent;
  let fixture: ComponentFixture<AddNotesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNotesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
