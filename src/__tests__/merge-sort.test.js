import { expect, test } from "vitest";

test("Works with empty arrays", () => {
  expect(mergeSort([])).toStrictEqual([]);
});

test("Works with single item arrays", () => {
  expect(mergeSort([73])).toStrictEqual([73]);
});
