import { beforeEach, describe, expect, it } from "vitest";
import { LinkedList, Node } from "./linked-list";

let list;

beforeEach(() => {
  list = new LinkedList();
});

describe("LinkedList insertion", () => {
  describe("LinkedList.append", () => {
    it("increases linked list length by one", () => {
      list.append("foo");
      expect(list).toHaveLength(1);
    });

    it('has "bar" as the last list item', () => {
      // Arrange
      list.head = new Node("foo");

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
      list.head = new Node("foo");

      // Act
      list.prepend("bar");

      // Assert
      expect(list.head.value).toBe("bar");
    });
  });
});

describe("LinkedList.pop", () => {
  describe("When the list is empty", () => {
    it("returns undefined", () => {
      expect(list.pop()).toBeUndefined();
    });

    it("does not decrease list length", () => {
      list.pop();
      expect(list).toHaveLength(0);
    });
  });

  it("returns the first removed list item", () => {
    // Arrange
    list.append("foo");
    list.append("bar");

    // Assert
    expect(list.pop()).toBe("foo");
  });
});

describe("LinkedList search", () => {
  describe("LinkedList.getHead", () => {
    it("returns undefined if the list is empty", () => {
      expect(list.getHead()).toBeUndefined();
    });

    it('returns "foo" as the first list item', () => {
      // Arrange
      list.append("foo");
      list.append("bar");

      // Assert
      expect(list.getHead()).toBe("foo");
    });
  });

  describe("LinkedList.getTail", () => {
    it("returns undefined if the list is empty", () => {
      expect(list.getTail()).toBeUndefined();
    });

    it('returns "bar" as the last list item', () => {
      // Arrange
      list.append("foo");
      list.append("bar");

      // Assert
      expect(list.getTail()).toBe("bar");
    });
  });

  describe("LinkedList.at", () => {
    it("returns undefined if a given index has no item", () => {
      // Arrange
      list.head = new Node("foo");
      list.head.next = new Node("bar");

      expect(list.at(2)).toBeUndefined();
    });

    it('returns "baz" if the given index is 2', () => {
      // Arrange
      list.append("foo");
      list.append("bar");
      list.append("baz");

      // Assert
      expect(list.at(2)).toBe("baz");
    });
  });
});
