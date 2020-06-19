import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVoyageDialogComponent } from './add-voyage-dialog.component';

describe('AddVoyageDialogComponent', () => {
  let component: AddVoyageDialogComponent;
  let fixture: ComponentFixture<AddVoyageDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVoyageDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVoyageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
