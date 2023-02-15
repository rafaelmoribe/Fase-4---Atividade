import { Component, Input, OnInit } from '@angular/core';
const { v4: uuidv4 } = require('uuid');

type Select = {
  value:number | string
  text:string
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit  {
  ngOnInit(): void {

    if(!this.init){
      this.startValue = this.options[1].text
    } else{
      this.startValue = this.init.text
    }

  }

  @Input() options: Select[] = []
  @Input() label: string = ''
  @Input() errorMessage: string = ''
  @Input() init: any = {}

  startValue: any = ""
  selectId = uuidv4()

}
