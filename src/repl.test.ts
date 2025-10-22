import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
  {
    input: "  hello  world  ",
    expected: ["hello", "world"],
  },
  {
    input: "HELLO WORLD",
    expected: ["hello", "world"],
  },
  {
    input: "PiKaChu",
    expected: ["pikachu"],
  },
  {
    input: "  ",
    expected: [],
  },
  {
    input: "",
    expected: [],
  },
  {
    input: "single",
    expected: ["single"],
  },
  {
    input: "  multiple   spaces   between  ",
    expected: ["multiple", "spaces", "between"],
  },
  {
    input: "\t\nTabs\tand\nNewlines\n",
    expected: ["tabs", "and", "newlines"],
  },
])("cleanInput($input)", ({ input, expected }) => {
  test(`Expected: ${expected}`, () => {
    const actual = cleanInput(input);

    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});