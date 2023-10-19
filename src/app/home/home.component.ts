import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

import { IData, IDataCharacter, IDataInfo } from '../interface/dataCharacters';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  misCharacters: IDataCharacter[] = [];
  nombres: any;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.traerCharacters();
    this.mostrarNombresPersonajes();  
  }

  

  traerCharacters() {
    this.apiService.getCharacters().subscribe((data: IData) => {
      this.misCharacters = data.results;
      /* this.misCharacters.forEach((character) => {
        console.log(character.name);
      }); */


    });
  }
  mostrarNombresPersonajes() {
    this.nombres = this.misCharacters.map((character) => {
      return character.name;
    });
    console.log(this.nombres);
  }
}
