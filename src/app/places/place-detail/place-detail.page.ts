import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private activatedRoute: ActivatedRoute, private placesService: PlacesService, private router: Router, 
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const placeId = paramMap.get('placeId');
      this.place = this.placesService.getPlace(placeId);
    })
  }

  async deletePlace() {
    const alertElement = await this.alertCtrl.create({
      header: "¿Estás seguro de querer eliminar este lugar?",
      message: "Ten cuidado!",
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Borrar',
          handler: () => {
            this.placesService.deletePlace(this.place.id);
            this.router.navigate(["/places"]);
          }
        }
      ]
    });

    await alertElement.present();
  }

}
