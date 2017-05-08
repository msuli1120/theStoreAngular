import { Injectable } from '@angular/core';
import { Item } from 'app/item.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ItemService {
  items: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFireDatabase) {
    this.items = angularFire.list('items');
  }

  getItems() {
    return this.items;
  }

  getItemById(itemId: string) {

    return this.angularFire.object('items/' + itemId);
  }

  addItem(newItem: Item) {
    this.items.push(newItem);
  }

  updateItem(itemUpdate) {
    var itemEntryInFirebase = this.getItemById(itemUpdate.$key);
    itemEntryInFirebase.update({
      category: itemUpdate.category,
      description: itemUpdate.description,
      name: itemUpdate.name,
      price: itemUpdate.price
    });
  }

}
