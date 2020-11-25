import { async, TestBed, inject } from "@angular/core/testing"
import { UserService } from './user.service'
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserInterface } from '../interfaces/user.interface';

describe(':: Gestão de Usuários Favoritos - Serviço ::', ()=> {
  const mock: UserInterface = 
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496'
      }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets'
    }
  }

  beforeEach(async(()=> {
    TestBed.configureTestingModule(
      {
        imports: [ RouterTestingModule,  HttpClientTestingModule ],
        declarations: [AppComponent],
        providers: [ UserService]
      }
    ).compileComponents();
  }));

  it('deve listar usuarios',inject([UserService], (service: UserService)=> {
    expect(
      service.getUsers()
    ).toBeTruthy();
  })),
  
  it('deve adicionar um usuário favorito no sessionStorage', 
    inject([UserService], (service: UserService)=> {
      expect( service.addAsFavorite(mock) ).toBeFalsy();
    })
  ),

  it('deve remover usuario favorito', inject([UserService], (service: UserService) => {
      expect( service.removeFavorite(mock) ).toBeFalsy();
    })
  )
});
