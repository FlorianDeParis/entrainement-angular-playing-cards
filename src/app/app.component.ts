import { Component } from '@angular/core';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from "./components/search-bar/search-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  monster1!: Monster;
  count: number = 0;
  search = '';

  constructor(){
    this.monster1 = new Monster();
    this.monster1.type = "fire";
    this.monster1.name = "Feurafouette";
    this.monster1.hp = 60;
    this.monster1.imagePath = "assets/img/monsters/feurafouette.jpg";
    this.monster1.figureCaption = "N°002";
    this.monster1.attackName = "Flammèche";
    this.monster1.attackStrength = 60;
    this.monster1.attackDescription = "Envoie une petite flamme à son prédateur quand elle se sent menacée";
  }

  increaseCount() {
    this.count ++;
  }

  updateSearch(value: String) {

  }
}
