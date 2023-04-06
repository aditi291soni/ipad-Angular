import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewipadComponent } from './newipad.component';

describe('NewipadComponent', () => {
  let component: NewipadComponent;
  let fixture: ComponentFixture<NewipadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewipadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewipadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
