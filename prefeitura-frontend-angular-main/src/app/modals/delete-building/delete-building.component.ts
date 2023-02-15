import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BuildingServicesService } from 'src/app/services/building-services.service';
import { constants } from 'src/app/constants/contants';

const {colors} = constants

@Component({
  selector: 'app-delete-building',
  templateUrl: './delete-building.component.html',
  styleUrls: ['./delete-building.component.scss']
})
export class DeleteBuildingComponent {

  constructor(
  public dialogRef: MatDialogRef<DeleteBuildingComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  private buildingServicesService: BuildingServicesService
  ){
    this.matricula = this.data.state.matricula
  }

  matricula: number
  title = 'Apagar imóvel'


  cancelIcon = 'cancel'
  cancelBackground = colors.cancel
  cancelText = 'Cancelar'
  cancel(): void {
    this.dialogRef.close();
  }

  submitIcon = 'done'
  submitBackground = colors.confirm
  submitText = 'Apagar'
  onDelete(){
    const {matricula} = this.data.state
    this.buildingServicesService.delete(matricula).subscribe({next:(res)=>{
      this.data.successCallback?.(matricula)
      this.dialogRef.close();
    }})
  }
}
