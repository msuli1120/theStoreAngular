import { Component, OnInit } from '@angular/core';
import { Item } from 'app/item.model';
import { ItemService } from 'app/item.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [ItemService, AngularFireDatabase]
})
export class ItemsComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit() {
    this.items = this.itemService.getItems();
  }

  goToDetail(item) {
    this.router.navigate(['items', item.$key]);
  }

}
