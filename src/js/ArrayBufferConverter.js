export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    let str = '';
    const buffer16BitView = new Int16Array(this.buffer);
    for (let i = 0; i < buffer16BitView.length; i += 1) {
      str += String.fromCharCode(buffer16BitView[i]);
    }
    return str;
  }
}
