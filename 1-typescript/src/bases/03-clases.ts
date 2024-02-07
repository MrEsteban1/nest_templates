import axios from "axios";

// In order to define a Class you need to write "class" and the name in Capital letter
export class Pokemon {
  public readonly id: number; //readonly cant change the value
  public name: string;
  private age: number; // Private atributtes are meant to be use inside of the class

  //This function ejecutes when a new instance of the class is declared.
  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  //Get defines an function that is use to return a value
  get urlImage() {
    return `https:pokemon.com/${this.id}`;
  }

  //Method: function inside the class, its public as default
  public speak() {
    console.log(`My name is ${this.name}!`);
  }

  //Only can be access inside the class.
  private getId() {
    return this.id;
  }

  //Asincronous functions
  async getMoves() {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/4");

    return data.moves;
  }
}
