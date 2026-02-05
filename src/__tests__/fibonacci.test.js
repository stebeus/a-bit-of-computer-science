import { expect, test } from "vitest";
import { findFibonacciTerm, iterateFibonacci } from "../fibonacci";

test("Zeroth Fibonacci term is 0", () => {
  expect(findFibonacciTerm(0)).toBe(0);
});

test("First Fibonacci term is 1", () => {
  expect(findFibonacciTerm(1)).toBe(1);
});

test("Seventh Fibonacci term is 13", () => {
  expect(findFibonacciTerm(7)).toBe(13);
});

test("Returns 0 if the input is 1", () => {
  expect(iterateFibonacci(1)).toBe([0]);
});

test("Returns 0 and 1 if the input is 2", () => {
  expect(iterateFibonacci(2)).toBe([0, 1]);
});

test("Returns a Fibonacci sequence", () => {
  expect(iterateFibonacci(8)).toBe([0, 1, 1, 2, 3, 5, 8, 13]);
});
