import { Component, OnInit, Input, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { ISection } from 'src/app/interfaces/i-card';

@Component({
  selector: 'agb-board-section',
  templateUrl: './board-section.component.html',
  styleUrls: ['./board-section.component.scss']
})
export class BoardSectionComponent implements OnInit {

  @Input() sectionData: ISection;
  @ViewChildren(CardComponent) cardComps!: QueryList<CardComponent>;
  
  constructor() { }

  ngOnInit() {
  }

  addNewCard=()=>{
    if(!this.sectionData.cards)
      this.sectionData.cards = [];

    this.sectionData.cards.unshift({
      content: ""
    });
    setTimeout(()=>{this.cardComps.first.setEditable();}, 0);    
  }
}
