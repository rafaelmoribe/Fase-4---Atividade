import { Component } from '@angular/core';
import { constants } from '../../../../constants/contants';
import { Router } from '@angular/router';

const {colors} = constants

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.scss']
})
export class TaxesComponent {

  constructor(private router: Router){}

  handleClick(){
    this.router.navigate(['session/buildings'])
  }
  buttonBackground = colors.primary
  buttonText = "Acessar Imóveis"
}
