import { Autor } from './autor';

describe('Autor', () => {
  it('should create an instance', () => {
    expect(new Autor(null,null,null,null)).toBeTruthy();
  });
});
