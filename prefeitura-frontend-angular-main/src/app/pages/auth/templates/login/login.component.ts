import { Component } from '@angular/core';
import {UserServiceService} from "../../../../services/user-service.service"
import {StorageHelper} from "../../../../helpers/storage"
import { Router } from '@angular/router';
import { constants } from 'src/app/constants/contants';

export type LoginPayload = {
  username: string
  password: string
}

const {colors} = constants

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private userServiceService: UserServiceService, private router: Router ){}

  cpf: string = 'CPF*'
  cpfPlaceholder: string = 'Digite o CPF'
  cpfError: string = ''
  password: string = 'Senha*'
  passwordPlaceholder: string = 'Digite a senha'
  passwordError: string = ''
  inputPassword: 'password' = 'password'

  submitText='Submeter'
  submitIcon='done'
  submitColor= colors.confirm

  onUsernameChange(event: any){
    this.payload = {...this.payload, username: event.target.value}
  }

  onPasswordChange(event: any){
    this.payload = {...this.payload, password: event.target.value}
  }

  cleanCPFError (){
    this.cpfError = ''
  }

  cleanPasswordError (){
    this.passwordError = ''
  }

  handleSubmit(){

    let error = false
    if(!this.payload.username){
      this.cpfError = 'Esse campo é obrigatório'
      error = true
    }
    if(!this.payload.password){
      this.passwordError = 'Esse campo é obrigatório'
      error = true
    }

    if (error){
      return
    }

   this.userServiceService.userLogin(this.payload)
   .subscribe({
    next: (res)=> {
      StorageHelper.set('prefeitura-user', res)
      this.router.navigate(['/session'])

    },
    error: (err)=>{
      if(err.status === 401){
        alert('Usuário ou/e senha incorretos(s)')
      }
    }
   })
  }

  payload: LoginPayload = {
    username: '',
    password: ''
  }
}
