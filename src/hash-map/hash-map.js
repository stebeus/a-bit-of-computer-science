import { LinkedList } from "../linked-list/linked-list.js";

class HashMap {
  #capacity = 16;
  #loadFactor = 0.75;

  constructor() {
    this.buckets = Array.from(
      { length: this.#capacity },
      () => new LinkedList(),
    );
    this.length = 0;
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
    this.length++;
  }

  remove(key) {
    const hashCode = this.#hash(key);

    this.buckets[hashCode] = new LinkedList();
  }

  clear() {
    this.buckets = Array.from(
      { length: this.#capacity },
      () => new LinkedList(),
    );
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

  keys() {
    function isKey({ head }) {
      if (!head) return;

      const data = head.data;
      return data.key;
    }
    const getKeys = ({ head }) => head.data.key;

    const bucket = this.buckets.filter(isKey);
    return bucket.map(getKeys);
  }

  values() {
    function isKey({ head }) {
      if (!head) return;

      const data = head.data;
      return data.key;
    }

    const getValues = ({ head }) => head.data.value;

    const bucket = this.buckets.filter(isKey);
    return bucket.map(getValues);
  }

  entries() {
    function isKey({ head }) {
      if (!head) return;

      const data = head.data;
      return data.key;
    }

    const getEntries = ({
      head: {
        data: { key, value },
      },
    }) => [key, value];

    const bucket = this.buckets.filter(isKey);
    return bucket.map(getEntries);
  }
}

const hashMap = new HashMap();

hashMap.set(
  "The Odin Project",
  "Free and open source full-stack web development curriculum.",
);

hashMap.set("1", "Number one");
hashMap.set("Beans", "Food");
hashMap.set("sneBa", "Copy of beans");
hashMap.set("JavaScript", NaN);

hashMap.remove("JavaScript");

console.log(hashMap.buckets);
console.log(hashMap.length);

console.log(hashMap.get("The Odin Project"));
console.log(hashMap.has("Beans"));
console.log(hashMap.keys());
console.log(hashMap.values());
console.log(hashMap.entries());

console.log(hashMap.clear());
hashMap.set("JavaScript", NaN);
console.log(hashMap.buckets);
