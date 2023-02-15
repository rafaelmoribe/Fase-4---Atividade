import { Component, OnInit } from '@angular/core';
import { BuildingResponse } from '../buildings/buildings.component';
import { Router } from '@angular/router';
import { constants } from 'src/app/constants/contants';
import { User } from 'src/app/helpers/user';

const {colors} = constants

@Component({
  selector: 'app-billet',
  templateUrl: './billet.component.html',
  styleUrls: ['./billet.component.scss']
})
export class BilletComponent implements OnInit  {

  constructor(private router: Router) {
    this.building = this.router.getCurrentNavigation()?.extras.state?.['building']
  }
  ngOnInit(): void {
    if (!this.user){
      this.router.navigate([''])
    }
  }

  today = new Date().toLocaleDateString()

  backBackground = colors.cancel
  backText= "Voltar"
  backIcon="arrow_back"
  handleBack(){
    this.router.navigate(['session/buildings'])
  }

  printBackground = colors.primary
  printText= "Imprimir"
  printIcon="print"
  handlePrint(){
    window.print()
  }

  user = User.get()
  building: BuildingResponse = {} as BuildingResponse

}
