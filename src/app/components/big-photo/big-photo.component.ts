import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-photo',
  templateUrl: './big-photo.component.html',
  styleUrls: ['./big-photo.component.css']
})
export class BigPhotoComponent implements OnInit {

  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardContent:string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
