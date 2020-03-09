import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
})
export class PlaceAddPage implements OnInit {

  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
  }

  saveNewPlace(title: HTMLInputElement, imageUrl: HTMLInputElement) {
    this.placesService.addPlace(title.value, imageUrl.value);
    this.router.navigate(["/places"]);
  }

}
