import { Component } from '@angular/core';

export interface Team {
  player1: string;
  player2: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  teamsArray: Array<Team> = [];
  team: Team;
  chosenPlayers: Array<string> = [];

  players = [
    { id: 1, name: 'Jakub', checked: false },
    { id: 2, name: 'Libor', checked: false },
    { id: 3, name: 'Patrik', checked: false },
    { id: 4, name: 'Ondra', checked: false },
    { id: 5, name: 'Víťa', checked: false },
    { id: 6, name: 'David', checked: false },
    { id: 7, name: 'Radek', checked: false },
    { id: 8, name: 'Michal', checked: false },
    { id: 9, name: 'Robert', checked: false },
    { id: 10, name: 'Aleš', checked: false },
    { id: 11, name: 'Marcel', checked: false },
  ];

  createTeams() {
    this.findChosenPlayers();
    while(this.chosenPlayers.length > 1) {
      this.team.player1 = this.player;
      this.team.player2 = this.player;
      this.teamsArray.push(this.team);
    }
    console.log(this.teamsArray);
  }

  get player() {
    let index = Math.floor(Math.random() * this.chosenPlayers.length - 1) + 1;
    let playerName = this.chosenPlayers[index];
    this.chosenPlayers.splice(index, 1);
    return playerName;
  }

  findChosenPlayers() {
    for(let i = 0; i < this.players.length; i++) {
        if((this.players[i].checked) && !(this.chosenPlayers.indexOf(this.players[i].name) > -1)) {
          this.chosenPlayers.push(this.players[i].name);
        }
        else if(!(this.players[i].checked) && (this.chosenPlayers.indexOf(this.players[i].name) > -1)) {
           const index = this.chosenPlayers.indexOf(this.players[i].name);
           this.chosenPlayers.splice(index, 1);
        }
      }
  }
}
