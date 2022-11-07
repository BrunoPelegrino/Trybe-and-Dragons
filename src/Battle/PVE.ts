import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: Fighter;
  private _monster: (Fighter | SimpleFighter)[];

  constructor(charater: Fighter, monster: (Fighter | SimpleFighter)[]) {
    super(charater);
    this._character = charater;
    this._monster = monster;
  }
  
  fight(): number {
    while (
      this._character.lifePoints > 0
      && this._monster.some((monster) => monster.lifePoints > 0)
    ) {
      this._monster.forEach((monster) => {
        this._character.attack(monster);
        this._character.receiveDamage(monster.strength);
      });
    }
    return super.fight();
  }
}