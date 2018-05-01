import { expect } from 'chai';
import { squareNumbers } from '../index';

describe('Test for squareNumbers function', () => {
  it('It should return 149162536496481', () => {
    expect(squareNumbers(123456789)).to.equal(149162536496481);
  })

  it("It should return 'Input is not an integer'", () => {
    expect(squareNumbers('123456789')).to.equal('Input is not an integer');
    expect(squareNumbers()).to.equal('Input is not an integer');
  })
});