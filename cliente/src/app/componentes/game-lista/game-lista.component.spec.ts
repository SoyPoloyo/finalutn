import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListaComponent } from './game-lista.component';

describe('GameListaComponent', () => {
  let component: GameListaComponent;
  let fixture: ComponentFixture<GameListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
