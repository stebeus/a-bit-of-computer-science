import { describe, expect, it } from "vitest";
import { LinkedList } from "./linked-list";

describe("LinkedList.append", () => {
  it("increases linked list length by one", () => {
    // Arrange
    const list = new LinkedList();

    // Act
    list.append("foo");

    // Assert
    expect(list).toHaveLength(1);
  });
});
