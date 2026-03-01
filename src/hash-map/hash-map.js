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

  remove(key) {
    const hashCode = this.#hash(key);

    delete this.buckets[hashCode];
    this.length--;
  }

  clear() {
    for (let index = 0; index < this.buckets.length; index++) {
      delete this.buckets[index];
    }

    this.length = 0;
  }

  get(key) {
    const entryValue = this.#getEntryProperty(key, 'value');
    return entryValue ?? null;
  }

  has(key) {
    const entryKey = this.#getEntryProperty(key, 'key');
    return entryKey != null;
  }

  keys() {
    const isEntry = (entry) => entry != null;
    const getKey = ({ key }) => key;

    const entries = this.buckets.filter(isEntry);

    return entries.map(getKey);
  }

  values() {
    const isEntry = (entry) => entry != null;
    const getValue = ({ value }) => value;

    const entries = this.buckets.filter(isEntry);

    return entries.map(getValue);
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

  #getEntryProperty(key, property) {
    const hashCode = this.#hash(key);
    const entry = this.buckets[hashCode];
    return entry?.[property];
  }
}

export { HashMap };
