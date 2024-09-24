import { Injectable } from '@angular/core';
import {v4 as uuid} from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },

    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },

    {
      id: uuid(),
      name: 'Vegetta',
      power: 7500
    }
  ];

  addCharacter(character: Character): void {
    //Esparcerlo a este nuevo objeto
    const newCharacter: Character = {id: uuid(), ...character};

    console.log('MainPage');
    console.log(character);
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index: number): void {
  onDeleteCharacter(id:string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
