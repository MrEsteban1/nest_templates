export const pokemonIds = [1, 2, 4, 30, 20]; //Typescript detects that is an array of numbers
// not allows pokemonIds = [...pokemonIds, "hola"]

// Interface creates a structure for an object.
interface Pokemon {
  id: number;
  name: string;
  age?: number; // Its optional with '?'
}

export const pikachu: Pokemon = {
  id: 2,
  name: "Pikachu",
};

// Creates an empty array thar only allow Pokemon's type
export const pokemons : Pokemon[] = []
