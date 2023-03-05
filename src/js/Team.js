export default class Team {
  constructor() {
    this.characters = new Set();
  }

  add(hero) {
    if (this.characters.has(hero)) {
      throw new Error("Такой персонаж уже есть.");
    } else {
      this.characters.add(hero);
    }
  }

  addAll(...heroes) {
    for (const person of heroes) {
      this.characters.add(person);
    }
  }

  toArray() {
    return [...this.characters];
  }

  *[Symbol.iterator]() {
    for (const pers of this.characters) {
      yield pers;
    }
  }
}
