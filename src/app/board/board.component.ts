import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  squares:any[];
  xoo:boolean;
  winner:boolean;
  rule:Number[][]=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]];
  winnera:string;
   
  constructor() {
     }

  ngOnInit() {
    this.newgame();
    console.log("Ngoninit");
  }
  newgame(){
    this.squares=Array(9).fill(null);
    this.winner=null;
    this.xoo=true;
    console.log(this.squares);
    this.winner=false;
  }

  get player(){
   return this.xoo?'X':'O';
  }
  makeMove(idx:number){
    if(!this.squares[idx]){
      this.squares.splice(idx,1,this.player);
      this.xoo=!this.xoo;
      this.winning()
    }
  }
  
  winning(){
    
    console.log("winner");
    console.log(this.squares);
    for(let i=0;i<this.rule.length;i++)
    {
      const ar:any[]=this.rule[i];
      const a:any=ar[0];
      const b:any=ar[1];
      const c:any=ar[2];
     console.log(this.squares[a]);
     console.log(this.squares[b]);
     console.log(this.squares[c]);
      if( this.squares[a]!=null  && this.squares[a]==this.squares[b] && this.squares[b]==this.squares[c])
      {
        console.log("yes");
        this.winner=true;
        this.winnera=this.squares[a];
           
      }
    }
  }


}