import { MomentDatesPipe } from './moment-dates.pipe';

describe('MomentDatesPipe', () => {
  it('create an instance', () => {
    const pipe = new MomentDatesPipe();
    expect(pipe).toBeTruthy();
  });
});
