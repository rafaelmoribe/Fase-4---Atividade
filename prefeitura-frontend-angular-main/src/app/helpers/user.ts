import { StorageHelper } from "./storage";

export class User {
  static get(){
    return StorageHelper.get('prefeitura-user')
  }
}
