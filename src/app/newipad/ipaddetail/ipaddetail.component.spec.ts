import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpaddetailComponent } from './ipaddetail.component';

describe('IpaddetailComponent', () => {
  let component: IpaddetailComponent;
  let fixture: ComponentFixture<IpaddetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpaddetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpaddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
