import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAgenceDialogComponent } from './add-agence-dialog.component';

describe('AddAgenceDialogComponent', () => {
  let component: AddAgenceDialogComponent;
  let fixture: ComponentFixture<AddAgenceDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAgenceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAgenceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
