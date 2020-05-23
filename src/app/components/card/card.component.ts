import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ICard } from 'src/app/interfaces/i-card';

@Component({
  selector: 'agb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() cardData: ICard;
  @ViewChild('txtContent',{static: false}) txtElement: ElementRef;
  
  constructor() { }

  ngOnInit() {}

  setEditable=()=>{
    this.cardData.isEditable = true;
    this.txtElement.nativeElement.focus();
  }

  saveContent=()=>{
    this.cardData.isEditable=false;
  }
}
