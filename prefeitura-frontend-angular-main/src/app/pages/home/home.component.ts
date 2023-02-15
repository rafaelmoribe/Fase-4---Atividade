import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { constants } from 'src/app/constants/contants';
import { User } from 'src/app/helpers/user';

const {colors} = constants

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
    const user = User.get()

    if (user){
      this.router.navigate(['session'])
    }
  }

  buttonText="Acessar"
  buttonBackground = colors.primary

  redirectAuth(){
    this.router.navigate(['auth']);
  }

}
