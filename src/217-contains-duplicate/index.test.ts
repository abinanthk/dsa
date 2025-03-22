import { describe, expect, it } from "vitest";
import { containsDuplicate } from "./solution1";

describe("Contains Duplicate - 217", () => {
  const tests: { input: number[]; result: boolean }[] = [
    {
      input: [1, 2, 3, 4],
      result: false,
    },
    {
      input: [1, 2, 3, 1],
      result: true,
    },
    {
      input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
      result: true,
    },
  ];

  tests.forEach((test) => {
    it(`${test.input}`, () => {
      expect(containsDuplicate(test.input)).toBe(test.result);
    });
  });
});
