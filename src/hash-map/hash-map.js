import { LinkedList } from "../linked-list/linked-list.js";

class HashMap {
  #capacity = 16;
  #loadFactor = 0.75;

  constructor() {
    this.buckets = Array.from(
      { length: this.#capacity },
      () => new LinkedList(),
    );
  }

  #hash(key) {
    let hashCode = 0;

    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      const charCode = key.charCodeAt(i);
      hashCode = (primeNumber * hashCode + charCode) % this.#capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const hashCode = this.#hash(key);
    const item = { key: hashCode, value };
    this.buckets[hashCode].append(item);
  }
}

const hashMap = new HashMap();
