import { describe, expect, it } from "vitest";
import { isAnagram } from "./solution1";

describe("Valid Anagram - 242", () => {
  const tests: {
    input: {
      s: string;
      t: string;
    };
    output: boolean;
  }[] = [
    {
      input: {
        s: "anagram",
        t: "nagaram",
      },
      output: true,
    },
    {
      input: {
        s: "rat",
        t: "car",
      },
      output: false,
    },
  ];

  tests.forEach((test) => {
    it(`${test.input}`, () => {
      expect(isAnagram(test.input.s, test.input.t)).toBe(test.output);
    });
  });
});
