import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMapForward, commandMapBack } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

import type { CLICommand } from "./state.js";


export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    map: {
      name: "map",
      description: "Fetch next page of locations",
      callback: commandMapForward,
    },
    mapb: {
      name: "mapb",
      description: "Fetch previous page of locations",
      callback: commandMapBack,
    },
    explore: {
      name: "explore <location_name>",
      description: "List all Pokémon in an area",
      callback: commandExplore,
    },
    catch: {
      name: "catch <pokemon_name>",
      description: "Catch a Pokémon",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect <pokemon_name>",
      description: "Inspect a caught Pokémon",
      callback: commandInspect
    },
    pokedex: {
      name: "pokedex",
      description: "List all caught Pokémon",
      callback: commandPokedex,
    }
  };
}
