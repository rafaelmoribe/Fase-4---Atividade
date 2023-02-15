import { Component, Output, EventEmitter } from '@angular/core';
import {UserServiceService} from "../../../../services/user-service.service"
import {constants} from "../../../../constants/contants"

export interface SignupPayload  {
  username: string
  name: string
  password: string
  telefone: string
  email: string
  persona: number
}

const {colors, personas} = constants

interface SignupFields extends SignupPayload {
  confirmPassword: string
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  constructor(private userServiceService: UserServiceService){}

  @Output("changeRenderer") changeRenderer: EventEmitter<any> = new EventEmitter();

  cpf: string = 'CPF*'
  cpfPlaceholder: string = 'Digite o CPF'
  cpfError: string = ''
  onUsernameChange(event: any){
    this.payload = {...this.payload, username: event.target.value}
  }
  cleanCPFError(){
    this.cpfError = ''
  }

  name: string = 'Nome*'
  namePlaceholder: string = 'Digite o Nome'
  nameError: string = ''
  onNameChange(event: any){
    this.payload = {...this.payload, name: event.target.value}
  }
  cleanNameError(){
    this.nameError = ''
  }

  password: string = 'Senha*'
  passwordPlaceholder: string = 'Digite a senha'
  passwordError: string = ''
  inputPassword: 'password' = 'password'
  onPasswordChange(event: any){
    this.payload = {...this.payload, password: event.target.value}
  }
  cleanPasswordError(){
    this.passwordError = ''
  }

  confirmPassword: string = 'Confirme a Senha*'
  confirmPasswordPlaceholder: string = 'Confirme a senha'
  confirmPasswordError: string = ''
  inputConfirmPassword: 'password' = 'password'
  onConfirmPasswordChange(event: any){
    this.payload = {...this.payload, confirmPassword: event.target.value}
  }
  cleanConfirmPasswordError(){
    this.confirmPasswordError = ''
  }

  telefone: string = 'Telefone*'
  telefonePlaceholder: string = 'Digite o telefone'
  telefoneError: string = ''
  onTelefoneChange(event: any){
    this.payload = {...this.payload, telefone: event.target.value}
  }
  cleanTelefoneError(){
    this.telefoneError = ''
  }

  email: string = 'E-mail*'
  emailPlaceholder: string = 'Digite o telefone'
  emailError: string = ''
  onEmailChange(event: any){
    this.payload = {...this.payload, email: event.target.value}
  }
  cleanEmailError(){
    this.emailError = ''
  }

  persona: string = 'Interesse*'
  personaError: string = ''
  personaOptions = personas
  onPersonaChange(event: any){
    this.payload = {...this.payload, persona: Number(event.target.value)}
    this.emailError = ''
  }

  submitText='Submeter'
  submitIcon='done'
  submitColor=colors.confirm

  handleSubmit(){

    let error = false

    if(!this.payload.username){
      this.cpfError = 'Campo obrigatório'
      error = true
    }
    if(!this.payload.name){
      this.nameError = 'Campo obrigatório'
      error = true
    }
    if(!this.payload.password){
      this.passwordError = 'Campo obrigatório'
      error = true
    }
    if(!this.payload.confirmPassword){
      this.confirmPasswordError = 'Campo obrigatório'
      error = true
    }
    if(!this.payload.email){
      this.emailError = 'Campo obrigatório'
      error = true
    }
    if(!this.payload.telefone){
      this.telefoneError = 'Campo obrigatório'
      error = true
    }
    if(this.payload.password !== this.payload.confirmPassword){
      this.confirmPasswordError = "Senha não confere"
      error = true
    }

    if (error){
      return
    }

    const {confirmPassword, ...rest} = this.payload
    const formatedPayload : SignupPayload = {...rest}

   this.userServiceService.userSignup(formatedPayload)
   .subscribe({
    next: (res)=> {
      this.changeRenderer.emit()
    },
    error: (err)=>{
      if(err.status === 409){
        alert('Este CPF já está cadastrado, faça login')
      }
    }
   })
  }

  payload: SignupFields = {
    username: '',
    name: '',
    password: '',
    confirmPassword: '',
    telefone: '',
    email: '',
    persona: 0
  }

}
