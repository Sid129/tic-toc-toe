import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-squre',
  templateUrl: './squre.component.html',
  styleUrls: ['./squre.component.scss']
})
export class SqureComponent {

@Input() value : 'X' | 'O';

  

}
