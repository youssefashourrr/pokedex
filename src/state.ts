import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeAPI, Pokemon } from "./pokeapi.js";


export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export type State = {
    rl: Interface;
    commands: Record<string, CLICommand>;
    api: PokeAPI;
    nextLocationsURL: string;
    previousLocationsURL: string;
    pokedex: Record<string, Pokemon>;
}

export function initState(cacheInterval: number): State {
    return {
        rl:
            createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "pokedex > ",
            }),
        commands: getCommands(),
        api: new PokeAPI(cacheInterval),
        nextLocationsURL: "",
        previousLocationsURL: "",
        pokedex: {},
    };
}