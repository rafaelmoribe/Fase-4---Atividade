import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {constants} from "src/app/constants/contants"
import { StorageHelper } from 'src/app/helpers/storage';
import { User } from 'src/app/helpers/user';
import { BuildingServicesService } from 'src/app/services/building-services.service';
import {Currency} from "../../helpers/currency"

const {colors} = constants

export type BuildingResponse = {
  bairro : string
  endereco : string
  id : number
  iptu : number
  matricula : number
  tamanho : number
  user : number
}

@Component({
  selector: 'app-buildings',
  templateUrl: './buildings.component.html',
  styleUrls: ['./buildings.component.scss']
})
export class BuildingsComponent implements OnInit {

  constructor(private router: Router, private buildingService: BuildingServicesService){}

  buildings: BuildingResponse[] = []


  ngOnInit(): void {
    const user = User.get()
    if (!user){
      this.router.navigate([''])
    }

    this.buildingService.getAllByUser().subscribe({
      next:(res)=> {
        const formatedBuildings = [...res as BuildingResponse[]].map(item=>({...item as any, iptu: Currency.toBRL(item.iptu)  }))
        this.buildings = formatedBuildings as BuildingResponse[]}
    })
  }

  logoutBackground=colors.cancel
  logoutIcon="logout"
  logoutText='Logout'
  onLogoutClick(){
    this.router.navigate([''])
    StorageHelper.clear()
  }

  backBackground=colors.primary
  backIcon="arrow_back"
  backText='Voltar'
  onBackClick(){
    this.router.navigate(['session'])
  }
}
