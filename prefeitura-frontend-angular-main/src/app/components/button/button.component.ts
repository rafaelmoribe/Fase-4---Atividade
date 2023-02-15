import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  ngOnInit(): void {
   if(this.buttonCircle) {
    this.borderRadius = '50%'
  }
  }


  @Input() text: string | undefined

  @Input() icon: string | undefined

  @Input() background: string | undefined

  @Input() iconColor: string | undefined

  @Input() buttonCircle: boolean | undefined

  @Output() onClick = new EventEmitter()

  borderRadius: string = ""


  click(){
    this.onClick.emit()
  }


}
