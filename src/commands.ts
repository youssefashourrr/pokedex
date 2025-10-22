import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMapForward, commandMapBack } from "./command_map.js";
import { commandExplore } from "./command_explore.js";

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
    }
  };
}
