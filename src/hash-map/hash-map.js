class HashMap {
  length = 0;

  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.buckets = new Array(this.capacity);
  }

  set(key, value) {
    const hashCode = this.#hash(key);
    const entry = { key: hashCode, value };

    this.buckets[hashCode] = entry;
    this.length++;
  }

  get(key) {
    const hashCode = this.#hash(key);
    const entryValue = this.buckets[hashCode]?.value;
    return entryValue ?? null;
  }

  has(key) {
    const hashCode = this.#hash(key);
    const entryKey = this.buckets[hashCode]?.key;
    return entryKey === hashCode;
  }

  #hash(key) {
    let hashCode = 0;

    const primeNumber = 31;

    for (let index = 0; index < key.length; index++) {
      const charCode = key.charCodeAt(index);
      hashCode = (primeNumber * hashCode + charCode) % this.capacity;
    }

    return hashCode;
  }
}

export { HashMap };
