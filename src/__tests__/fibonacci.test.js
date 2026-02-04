import { expect, test } from "vitest";

test("Returns 0 if the input is 1", () => {
  expect(iterateFibonacci(1)).toBe([0]);
});

test("Returns 0 and 1 if the input is 2", () => {
  expect(iterateFibonacci(1)).toBe([0, 1]);
});
