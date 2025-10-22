import type { State } from "./state";


export async function commandPokedex(state: State) {
    if (Object.keys(state.pokedex).length === 0) {
        console.log("Your Pokédex is empty.");
        return;
    }

    console.log("Your Pokédex:");
    for (const pokemonName of Object.keys(state.pokedex).sort()) {
        console.log(`- ${pokemonName}`);
    }
}
