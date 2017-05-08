import { Component, OnInit } from '@angular/core';
import { Item } from './../item.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ItemService } from './../item.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ItemService, AngularFireDatabase]
})
export class AdminComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  submit(category: string, description: string, name: string, price: number) {
    var newItem: Item = new Item(category, description, name, price);
    this.itemService.addItem(newItem);
  }

}
