import { CapitalizatePipe } from './capitalizate.pipe';

describe('CapitalizatePipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalizatePipe();
    expect(pipe).toBeTruthy();
  });
});
