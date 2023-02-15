import { Component, OnInit } from '@angular/core';
import { StorageHelper } from 'src/app/helpers/storage';
import { Router } from '@angular/router';
import { User } from 'src/app/helpers/user';
import {constants} from "src/app/constants/contants"

const {colors} = constants

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {

  constructor(private router: Router){}

  today = new Date().toLocaleDateString()
  user = {name: '', persona : 0}

  logoutBackground=colors.cancel
  logoutIcon="logout"
  logoutText='Logout'

  onLogoutClick(){
    this.router.navigate([''])
    StorageHelper.clear()
  }


  ngOnInit(): void {
    const user = User.get()

    if (!user){
      this.router.navigate([''])
    }

    this.user = user

  }
}
