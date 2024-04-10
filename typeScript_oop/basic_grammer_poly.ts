interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    // get을 받기 위해서
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();

stringsStorage.get('key?');
stringsStorage.set('hello?', 'how are you');

const booleanStorage = new LocalStorage<boolean>();

booleanStorage.get('key?!!');
booleanStorage.set('hello?', true);
