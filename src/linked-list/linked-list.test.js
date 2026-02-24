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

  it('has "bar" as the last list item', () => {
    // Arrange
    const list = new LinkedList();
    list.append("foo");

    // Act
    list.append("bar");

    // Assert
    expect(list.head.next.value).toBe("bar");
  });
});

describe("LinkedList.prepend", () => {
  it("increases linked list length by one", () => {
    // Arrange
    const list = new LinkedList();

    // Act
    list.prepend("foo");

    // Assert
    expect(list).toHaveLength(1);
  });

  it('has "bar" as the first list item', () => {
    // Arrange
    const list = new LinkedList();
    list.append("foo");

    // Act
    list.prepend("bar");

    // Assert
    expect(list.head.value).toBe("bar");
  });
});

describe("LinkedList search methods", () => {
  describe("LinkedList.getHead", () => {
    it("returns undefined if the list is empty", () => {
      const list = new LinkedList();
      expect(list.getHead()).toBeUndefined();
    });

    it('returns "foo" as the first list item', () => {
      // Arrange
      const list = new LinkedList();
      list.append("foo");

      // Act
      list.append("bar");

      // Assert
      expect(list.getHead()).toBe("foo");
    });
  });
});
