class HashMap {
  #capacity = 16;
  #loadFactor = 0.75;

  constructor() {
    this.buckets = new Array(this.#capacity);
  }
}

const hashMap = new HashMap();
