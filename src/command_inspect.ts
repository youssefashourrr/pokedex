import type{ State } from "./state.js";


export async function commandInspect(state: State, ...args: string[]) {
    if (args.length !== 1) {
    throw new Error("you must provide a Pokemon name");
    }

    const name = args[0];
    const pokemon = state.pokedex[name];

    if (!pokemon) {
    console.log(`you have not caught that pokemon`);
    return;
    }

    console.log(`Name: ${pokemon.name}`);
    console.log(`Height: ${pokemon.height}`);
    console.log(`Weight: ${pokemon.weight}`);
    console.log(`Abilities:`);
    for (const a of pokemon.abilities) {
        console.log(`\t-${a.ability.name}`);
    }
    console.log(`Types:`);
    for (const t of pokemon.types) {
        console.log(`\t-${t.type.name}`);
    }
}