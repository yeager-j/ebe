import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingBlocksComponent } from './training-blocks.component';

describe('TrainingBlocksComponent', () => {
  let component: TrainingBlocksComponent;
  let fixture: ComponentFixture<TrainingBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
