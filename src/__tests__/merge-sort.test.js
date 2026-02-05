import { expect, test } from "vitest";

test("Works with empty arrays", () => {
  expect(mergeSort([])).toStrictEqual([]);
});
