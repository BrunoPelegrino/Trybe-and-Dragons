import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _createdArcheType = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    Mage._createdArcheType += 1;
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._createdArcheType;
  }
}