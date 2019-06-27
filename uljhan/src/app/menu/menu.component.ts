import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { Dishes } from '../shared/dishes';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  selectedDish : Dish;
  dishes = Dishes;
  constructor(
    private matListModule: MatListModule,
  ) { }

  onSelected(dish: Dish)
  {
    this.selectedDish = dish;
  }
  ngOnInit() {  }
}
