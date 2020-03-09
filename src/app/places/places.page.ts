import { Component, OnInit } from '@angular/core';
import { PlacesService } from './places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places = []

  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
    this.places = this.placesService.getPlaces();
  }

  // funcion que se ejecuta cuando se vuelve a pedir los datos
  ionViewWillEnter() {
    this.places = this.placesService.getPlaces();
  }

  addNewPlace() {
    this.router.navigate(['/new-place']);
  }

  goToHome() {
    this.router.navigate(["/home"]);
  }

}
