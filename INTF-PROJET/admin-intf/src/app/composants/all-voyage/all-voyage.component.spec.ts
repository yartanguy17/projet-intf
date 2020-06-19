import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVoyageComponent } from './all-voyage.component';

describe('AllVoyageComponent', () => {
  let component: AllVoyageComponent;
  let fixture: ComponentFixture<AllVoyageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllVoyageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
