import { Component, Input } from '@angular/core';
import { BuildingResponse } from '../../buildings.component';
import { constants } from 'src/app/constants/contants';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddBuildingComponent } from 'src/app/modals/add-building/add-building.component';
import { Currency } from 'src/app/helpers/currency';
import { BuildingServicesService } from 'src/app/services/building-services.service';
import { DeleteBuildingComponent } from 'src/app/modals/delete-building/delete-building.component';

const {colors} = constants

@Component({
  selector: 'app-buildings-list',
  templateUrl: './buildings-list.component.html',
  styleUrls: ['./buildings-list.component.scss']
})
export class BuildingsListComponent  {

  constructor(private router: Router,  public dialog: MatDialog, private buildingServicesService: BuildingServicesService ) { }

  @Input() buildings:BuildingResponse[]  = []

  buttonCircle=true


  addText = "Cadastrar Imóvel"
  addIcon = "add"
  addBackground = colors.confirm
  addBuilding(){
   
   this.dialog.open(AddBuildingComponent, {
      data : {successCallback: (payload: any)=>{
        const formatedPayload = {...payload}
        console.log(formatedPayload)
        formatedPayload.iptu =Currency.toBRL(formatedPayload.iptu)
        this.buildings = [...this.buildings, formatedPayload]
        alert('Imóvel Criado!')
      }}
    });
  }

  updateIcon = "edit"
  updateBackground = colors.secondary
  updateBuilding(building: any){
    this.dialog.open(AddBuildingComponent, {
      data : {state:building, successCallback: (payload: any)=>{
        const formatedPayload = {...payload}
        formatedPayload.iptu =Currency.toBRL(formatedPayload.iptu)
        const updatedBuildings = [...this.buildings].reduce((acc:BuildingResponse[], current: BuildingResponse)=>{
          if(current.matricula !== payload.matricula){
            acc.push(current)
          } else {
            acc.push(formatedPayload)
          }
          return acc
        },[])

        this.buildings = updatedBuildings
        alert('Imóvel atualizado!')
      }}
    });
  }

  deleteIcon = "delete"
  deleteBackground = colors.cancel
  deleteBuilding(matricula:number){
    this.dialog.open(DeleteBuildingComponent, {
      data : {state: {matricula}, successCallback: (matricula: number)=>{
        this.buildings = [...this.buildings].filter(building=> building.matricula !== matricula)
        alert('Imóvel Apagado')
      }}
    });
  }


  viewIcon="description"
  viewText = "Visualizar"
  viewBackground = colors.primary
  viewBillet(building: BuildingResponse){
    this.router.navigateByUrl('session/buildings/billet', {state: {building}})
  }

}
