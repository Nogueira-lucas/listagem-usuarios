import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Map from 'ol/Map';
import { UserService } from 'src/app/services/user.service';

declare var ol: any;

@Component({
  selector: 'user-details-modal',
  templateUrl: './user-details-modal.component.html',
  styleUrls: ['./user-details-modal.component.scss']
})
export class UserDetailsModalComponent implements OnInit, AfterViewInit {

  user: UserInterface;
  map: Map;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: UserInterface,
    public dialogRef: MatDialogRef<any>,
    private service: UserService
    ) {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.user = this.data;
  }

  ngAfterViewInit() {
    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        })
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat([
          Number.parseFloat(this.data.address.geo.lng), 
          Number.parseFloat(this.data.address.geo.lat)]),
        zoom: 4
      })
    });
  }

  addOnSessionStorage() {
    if(this.isFavorite) {
      this.service.removeFavorite(this.user);
    } else {
      this.service.addAsFavorite(this.user);
    }
  }

  get isFavorite() {
    return this.user.id === Number.parseInt(sessionStorage.getItem(this.user.name));
  }
}
