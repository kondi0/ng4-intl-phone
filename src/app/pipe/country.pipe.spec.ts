import { CountryPipe } from './country.pipe';

describe('CountryPipe', () => {
  it('create an instance', () => {
    const pipe = new CountryPipe();
    expect(pipe).toBeTruthy();
  });
});
