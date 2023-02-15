import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/helpers/user';
import {constants} from "src/app/constants/contants"

const {colors} = constants

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router){}

  user = User.get()

  ngOnInit(): void {
    if (this.user){
      this.buttonText = 'Session'
    } else {this.buttonText = 'Home'}
  }

  buttonText = "Home"
  buttonBackground = colors.primary

  handleClick(){
    const path = this.user ? 'session' : ''
    this.router.navigate([path])
  }
}
