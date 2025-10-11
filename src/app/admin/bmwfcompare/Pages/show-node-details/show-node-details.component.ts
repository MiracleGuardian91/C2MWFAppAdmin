import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-show-node-details',
  templateUrl: './show-node-details.component.html',
  styleUrls: ['./show-node-details.component.scss']
})
export class ShowNodeDetailsComponent implements OnInit {
  @Input() LeftNode:any;
  @Input() RightNode: any;
  LeftNodeText :any;
  RightNodeText :any;

  LeftData: any;
  RightData :any;
  constructor( public activeModal: NgbActiveModal) { }

  ngOnInit(): void {

    if (this.LeftNode && this.LeftNode.node){
      this.LeftNodeText=this.LeftNode.node.text;
      this.RightNodeText=this.RightNode.text;
      //  const jsonColsArray = liAttr.jsonCols ? liAttr.jsonCols.toLowerCase().split(',') : [];
       const liAttr = this.LeftNode.node.li_attr;
       const dispColsArray = liAttr.dispCols.toLowerCase().split(',');
       this.LeftData = Object.entries(liAttr.nodeData)
         .filter(([key]) => dispColsArray.includes(key.toLowerCase()))
         .reduce((obj, [key, value]) => {
           obj[key.toLowerCase()] = value;
           return obj;
         }, {});
  
         const rightliAttr = this.RightNode.li_attr;
         const RightdispColsArray = rightliAttr.dispCols.toLowerCase().split(',');
         this.RightData = Object.entries(rightliAttr.nodeData)
         .filter(([key]) => RightdispColsArray.includes(key.toLowerCase()))
         .reduce((obj, [key, value]) => {
           obj[key.toLowerCase()] = value;
           return obj;
         }, {});
     
    }

    if(this.RightNode && this.RightNode.node){
      this.LeftNodeText=this.LeftNode.text;
      this.RightNodeText=this.RightNode.node.text;
      const liAttr = this.LeftNode.li_attr;
      const dispColsArray = liAttr.dispCols.toLowerCase().split(',');
      this.LeftData = Object.entries(liAttr.nodeData)
        .filter(([key]) => dispColsArray.includes(key.toLowerCase()))
        .reduce((obj, [key, value]) => {
          obj[key.toLowerCase()] = value;
          return obj;
        }, {});

        const rightliAttr = this.RightNode.node.li_attr;
        const RightdispColsArray = rightliAttr.dispCols.toLowerCase().split(',');
        this.RightData = Object.entries(rightliAttr.nodeData)
        .filter(([key]) => RightdispColsArray.includes(key.toLowerCase()))
        .reduce((obj, [key, value]) => {
          obj[key.toLowerCase()] = value;
          return obj;
        }, {});

    }
  }

}
