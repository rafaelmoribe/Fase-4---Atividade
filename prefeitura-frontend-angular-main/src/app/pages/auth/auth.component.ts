import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { constants } from 'src/app/constants/contants';
import { User } from 'src/app/helpers/user';

type AuthRenderer = 'login' | 'signup'
type AuthTitle = 'Login' | 'Signup'
type AuthIcon = 'how_to_reg' | 'login'

const {colors} = constants

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(public router: Router){}
  ngOnInit(): void {
    const user = User.get()
    if (user){
      this.router.navigate(['session'])
    }
  }

  authTitle: AuthTitle = 'Login'
  renderer: AuthRenderer = 'login'
  buttonText: AuthTitle = 'Signup'
  buttonTemplateBackground= colors.secondary
  buttonTemplateIcon: AuthIcon='login'
  buttonHomeBackground = colors.primary
  message: string = 'Ainda não é cadastrado?'
  homeIcon="house"

  toggler = {
    login: {
     authTitle: 'Signup',
     renderer: 'signup',
     buttonText: 'Login',
     buttonTemplateIcon:'how_to_reg',
     message: 'Já é cadastrado?'
    },
    signup:{
     authTitle: 'Login',
     renderer: 'login',
     buttonText: 'Signup',
     buttonTemplateIcon:'login',
     message:  'Ainda não é cadastrado?',
    }
 }

  onToogleTemplateClick(type: AuthRenderer){
    this.authTitle = this.toggler[type].authTitle as AuthTitle
    this.renderer = this.toggler[type].renderer as AuthRenderer
    this.buttonText = this.toggler[type].buttonText as AuthTitle
    this.buttonTemplateIcon = this.toggler[type].buttonTemplateIcon as AuthIcon
    this.message = this.toggler[type].message
  }

  onHomeClick(){
      this.router.navigate([''])
  }

}
