import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Item } from './../item.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ItemService } from './../item.service';


@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css'],
  providers: [ItemService, AngularFireDatabase]
})
export class ItemDetailComponent implements OnInit {
  itemId: string;
  itemToDisplay;
  constructor(private route: ActivatedRoute, private location: Location, private itemService: ItemService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.itemId = urlParameters['id'];
    });
    this.itemToDisplay = this.itemService.getItemById(this.itemId);
  }

}
