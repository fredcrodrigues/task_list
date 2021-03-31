import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadTaskComponent } from './cad-task.component';

describe('CadTaskComponent', () => {
  let component: CadTaskComponent;
  let fixture: ComponentFixture<CadTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
