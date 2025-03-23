import { describe, expect, it } from "vitest";
import { containsDuplicate } from "./solution1";

describe("Contains Duplicate - 217", () => {
  const tests: { input: number[]; output: boolean }[] = [
    {
      input: [1, 2, 3, 4],
      output: false,
    },
    {
      input: [1, 2, 3, 1],
      output: true,
    },
    {
      input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
      output: true,
    },
  ];

  tests.forEach((test) => {
    it(`${test.input}`, () => {
      expect(containsDuplicate(test.input)).toBe(test.output);
    });
  });
});
