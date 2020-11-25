import { async, TestBed } from '@angular/core/testing';
import { UserDetailsModalComponent } from './user-details-modal.component';
import { UserService } from 'src/app/services/user.service';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MatDialogRef } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe(':: UserDetailsModalComponent - Componente ::', () => {

  const mock = 
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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsModalComponent ],
      providers: [ 
        UserService,
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            data: mock,
            minHeight: '400px',
            width: '700px'
          }
        },
        {
          provide: MatDialogRef,
          useValue: {
            data: mock
          }
        }
      ],
      imports: [
        MatDialogModule,
        HttpClientTestingModule
      ]
    }).compileComponents();
  }));

  it('deve ser criado', () => {
    const fixture = TestBed.createComponent(UserDetailsModalComponent);
    const component = fixture.componentInstance;

    expect(component).toBeTruthy();
  });
});
