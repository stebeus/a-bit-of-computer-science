import { beforeEach, describe, expect, it } from "vitest";
import { LinkedList } from "./linked-list";

let list;

beforeEach(() => {
  list = new LinkedList();
});

describe("LinkedList.append", () => {
  it("increases linked list length by one", () => {
    list.append("foo");
    expect(list).toHaveLength(1);
  });

  it('has "bar" as the last list item', () => {
    // Arrange
    list.append("foo");

    // Act
    list.append("bar");

    // Assert
    expect(list.head.next.value).toBe("bar");
  });
});

describe("LinkedList.prepend", () => {
  it("increases linked list length by one", () => {
    list.prepend("foo");
    expect(list).toHaveLength(1);
  });

  it('has "bar" as the first list item', () => {
    // Arrange
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
      expect(list.getHead()).toBeUndefined();
    });

    it('returns "foo" as the first list item', () => {
      // Arrange
      list.append("foo");

      // Act
      list.append("bar");

      // Assert
      expect(list.getHead()).toBe("foo");
    });
  });
});
