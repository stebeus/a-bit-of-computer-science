import { expect, test } from "vitest";
import { mergeSort } from "../merge-sort";

test("Works with empty arrays", () => {
  expect(mergeSort([])).toStrictEqual([]);
});

test("Works with single item arrays", () => {
  expect(mergeSort([73])).toStrictEqual([73]);
});

test("Works with even arrays", () => {
  expect(mergeSort([105, 79, 100, 110])).toStrictEqual([79, 100, 105, 110]);
});

test("Works with odd arrays", () => {
  expect(mergeSort([5, 3, 1, 4, 2])).toStrictEqual([1, 2, 3, 4, 5]);
});
