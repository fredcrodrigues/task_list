import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavTarefasComponent } from './nav-tarefas.component';

describe('NavTarefasComponent', () => {
  let component: NavTarefasComponent;
  let fixture: ComponentFixture<NavTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavTarefasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
