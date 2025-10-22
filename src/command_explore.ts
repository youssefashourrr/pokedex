import type{ State } from "./state.js";


export async function commandExplore(state: State, ...args: string[]) {
    if (args.length !== 1) {
    throw new Error("you must provide a location name");
    }

    const name = args[0];
    const locationInfo = await state.api.fetchLocation(name);

    console.log(`Exploring ${name}`);
    console.log("Found Pokemon:");
    for (const encounter of locationInfo.pokemon_encounters) {
        console.log(`- ${encounter.pokemon.name}`);
    }
}