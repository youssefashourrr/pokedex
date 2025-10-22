import type{ State } from "./state.js";


export async function commandCatch(state: State, ...args: string[]) {
    if (args.length !== 1) {
    throw new Error("you must provide a Pokemon name");
    }

    const name = args[0];
    const pokemon = await state.api.fetchPokemon(name);
    console.log(`Throwing a Pokeball at ${name}...`);
    
    const catchChance = Math.max(5, 50 - Math.floor(pokemon.base_experience / 10));
    const roll = Math.floor(Math.random() * 100) + 1;
    if (roll <= catchChance) {
        state.pokedex[name] = pokemon;
        console.log(`${name} was caught!`);
        console.log("You may now inspect it with the inspect command.")
    } else {
        console.log(`${name} escaped!`);
    }
}