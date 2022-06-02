import ArrayBufferConverter from '../arrayBufferConverter';
import getBuffer from '../getBuffer';

test('Should decode data correct', () => {
  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load(getBuffer());

  expect(arrayBufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
