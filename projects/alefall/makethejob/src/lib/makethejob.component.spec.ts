import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakethejobComponent } from './makethejob.component';

describe('MakethejobComponent', () => {
  let component: MakethejobComponent;
  let fixture: ComponentFixture<MakethejobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakethejobComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakethejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
