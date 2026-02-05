import { expect, test } from "vitest";

test("Works with empty arrays", () => {
  expect(mergeSort([])).toStrictEqual([]);
});

test("Works with single item arrays", () => {
  expect(mergeSort([73])).toStrictEqual([73]);
});

test("Works with even arrays", () => {
  expect(mergeSort([105, 79, 100, 110])).toStrictEqual([79, 100, 105, 110]);
});
