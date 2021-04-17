import { MaxLengthStringPipe } from './max-length-string.pipe';

describe('MaxLengthStringPipe', () => {
  it('create an instance', () => {
    const pipe = new MaxLengthStringPipe();
    expect(pipe).toBeTruthy();
  });
});
