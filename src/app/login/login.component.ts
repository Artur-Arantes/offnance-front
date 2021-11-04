import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';

import { CustomErrorStateMatcher } from '../models/CustomErrorStateMatcher.model';
import { AuthService } from '../services/auth.service';
import { FrasesService } from '../services/frases.service';
import { TokenStorageService } from '../services/token-storage.service';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  siginForm: FormGroup;

  matcher:ErrorStateMatcher = new CustomErrorStateMatcher();
  constructor(private authService: AuthService,
    private router: Router,
    private activedRoute: ActivatedRoute,
    private frasesService: FrasesService,
    private snackBar: MatSnackBar,
    private tokenStorageService: TokenStorageService) {
    this.siginForm = new FormGroup({
      user: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      pwd: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
    this.activedRoute.queryParams.subscribe((params:any) => {
      const mensagem = params['mensagem'];
      if (mensagem) {
        switch (mensagem) {
          case 'deslogado':
            const snackBarRef = this.snackBar.open(this.frasesService.converter('SAIR_MENSAGEM'), this.frasesService.converter('SAIR_BOTAO'), { duration: 2500 });
            snackBarRef.onAction().subscribe((act:any) => 
            this.snackBar.open(this.frasesService.converter('SAIR_MENSAGEM_RETORNO'), '',
              { duration: 2000 }));
            break;

          default:
            this.snackBar.open(this.frasesService.converter('ERRO_ACESSO_INVALIDO'), '', { duration: 2500 });
            break;
        }
      }
    });
  }

  ngOnInit() {
  }
  public sendForm() {
    if (this.siginForm.valid) {
      let user:string= this.siginForm.get('user')!.value || "";
      let password:string = this.siginForm.get('pwd')!.value;
      this.authService.login(user, password)
        .subscribe((vlr:any) => {
          this.tokenStorageService.saveUser(user)
          this.tokenStorageService.saveToken(vlr["accessToken"])
          this.openSnackBar(this.frasesService.converter('LOGIN_SUCESSO'));
          this.router.navigate(['/home']);

        }, (err:any) => {
          this.openSnackBar(this.frasesService.converter('LOGIN_FALHA'));

        });
    }
  }
  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 1500,
    });
  }
}