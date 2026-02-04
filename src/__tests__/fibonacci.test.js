import { expect, test } from "vitest";

test("Returns 0 if the input is 1", () => {
  expect(iterateFibonacci(1)).toBe([0]);
});
