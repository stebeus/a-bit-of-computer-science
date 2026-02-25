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

  get(key) {
    const hashCode = this.#hash(key);

    function isKey({ head }) {
      if (!head) return;

      const data = head.data;
      return data.key === hashCode;
    }

    const bucket = this.buckets.find(isKey);
    if (!bucket) return null;

    const value = bucket.head.data.value;
    return value;
  }

  has(key) {
    const hashCode = this.#hash(key);

    function isKey({ head }) {
      if (!head) return;

      const data = head.data;
      return data.key === hashCode;
    }

    const bucket = this.buckets.some(isKey);
    return bucket;
  }
}

const hashMap = new HashMap();

hashMap.set(
  "The Odin Project",
  "Free and open source full-stack web development curriculum.",
);
hashMap.set(1, "Number one");
hashMap.set("JavaScript", NaN);
hashMap.set("Beans", "Food");
hashMap.set("sneBa", "Copy of beans");

console.log(hashMap.get("The Odin Project"));
console.log(hashMap.has("Beans"));
