import { Injectable } from '@angular/core';
import { Place } from './place.model'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id: '1',
      title: 'Eiffel Tower',
      imageUrl: 'https://queverenelmundo.com/guias/wp-content/uploads/Torre-Eiffel-dia-1.jpg',
      comments: ['Awesome place', 'Wonderful experience']
    },
    {
      id: '2',
      title: 'Statue of Liberty',
      imageUrl: 'https://fotografias.lasexta.com/clipping/cmsimages01/2019/02/22/82944EE2-5722-4E39-8D4A-13ACA3ACE407/58.jpg',
      comments: ['Awesome place', 'Wonderful experience']
    },
    {
      id: '3',
      title: 'Awesome Place',
      imageUrl: 'https://fotografias.lasexta.com/clipping/cmsimages01/2019/02/22/82944EE2-5722-4E39-8D4A-13ACA3ACE407/58.jpg',
      comments: []
    }
  ]

  constructor() { }

  // devuelvo una copia del array de los lugares
  getPlaces() {
    return [...this.places];
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }

  addPlace(title: string, imageUrl: string) {
    this.places.push({
      id: this.places.length + 1 + "",
      title,
      imageUrl,
      comments: []
    })
  }

  // reemplazo el array sin el lugar a eliminar
  deletePlace(placeId: string) {
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }

}
