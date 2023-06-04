import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-photo',
  templateUrl: './small-photo.component.html',
  styleUrls: ['./small-photo.component.css']
})
export class SmallPhotoComponent implements OnInit {
   @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  constructor() { }

  ngOnInit(): void {
  }

}
