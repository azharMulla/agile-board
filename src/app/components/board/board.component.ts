import { Component, OnInit } from '@angular/core';
import { ISection } from 'src/app/interfaces/i-card';

@Component({
  selector: 'agb-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  public sections: ISection[];

  constructor() { }

  ngOnInit() {
    this.dummyData();
  }

  clearData=()=>{
    this.sections = [{ title: "What went well", class:"cs-well" },
                      { title: "What can be improved", class:"cs-improved"},
                      { title: "Start doing", class:"cs-start-doing"},
                      { title: "Action items", class:"cs-action-items" }];
  }

  dummyData=()=>{
    this.sections = [{ title: "What went well", class:"cs-well" , cards : [
                                                                    {content: "Dummy entry1"}
                                                                  ]},
                    { title: "What can be improved", class:"cs-improved" , cards : [
                                                                      {content: "Dummy entry2-1"},
                                                                      {content: "Dummy entry2-2"}
                                                                    ]},
                    { title: "Start doing", class:"cs-start-doing", cards : [
                                                                      {content: "Dummy entry3"}
                                                                    ] },
                    { title: "Action items", class:"cs-action-items" , cards : [
                                                                      {content: "Dummy entry4"}
                                                                    ] }];
  }

}
