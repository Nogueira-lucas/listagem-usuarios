import { async, TestBed } from '@angular/core/testing';
import { UsersPageComponent } from './users-page.component';
import { UserService } from 'src/app/services/user.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe(':: UsersPageComponent - Componente ::', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersPageComponent ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule
      ],
      providers: [ 
        UserService,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  it('deve ser criado', () => {
    const fixture = TestBed.createComponent(UsersPageComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
