import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from './../item.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[ItemService]
})
export class EditComponent implements OnInit {
  @Input() item;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  update(itemUpdate) {
    this.itemService.updateItem(itemUpdate);
  }
}
