export class StorageHelper {

 static set(key: string, value: any){
    localStorage.setItem(key, JSON.stringify(value))
 }

 static get(key: string){
  const item  = localStorage.getItem(key)
  return item ? JSON.parse(item) : ""
 }

 static clear():void{
  localStorage.clear()
 }
}
