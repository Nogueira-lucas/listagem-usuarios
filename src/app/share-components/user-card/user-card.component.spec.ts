import { async, TestBed } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';

describe(':: UserCardComponent - Componente ::', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCardComponent ]
    })
    .compileComponents();
  }));

  it('deve ser criado', () => {
    const fixture = TestBed.createComponent(UserCardComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
