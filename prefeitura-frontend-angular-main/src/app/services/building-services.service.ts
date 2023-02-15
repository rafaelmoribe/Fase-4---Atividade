import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {configs} from "../configs/configs"
import { User } from '../helpers/user';

const {building} = configs.baseURLS

const httpConfigs = ()=> {
  return {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization : `Token ${User.get().token}`
  })
}};

@Injectable({
  providedIn: 'root'
})
export class BuildingServicesService {

  constructor(private httpClient: HttpClient) { }

  getAllByUser(){
    return this.httpClient.get(`${building}/buildings/`, httpConfigs())
  }

  create(payload: any){
    return this.httpClient.post(`${building}/buildings/`,payload ,httpConfigs())
  }

  update(matricula: number, payload:any){
    return this.httpClient.patch(`${building}/buildings/matricula/${matricula}/`,payload, httpConfigs())
  }

  delete(matricula: number){
    return this.httpClient.delete(`${building}/buildings/matricula/${matricula}/`, httpConfigs())
  }
}
