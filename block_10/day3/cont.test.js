const content = require('./cont');

describe('Test if RandomNumber IsDivisible', ()=>{
  it('randomnumber should be called after isdivisible is called', ()=>{
    content.randomNumber = jest.fn().mockReturnValue(10)
    expect(content.isDivisible()).toBe(false);
    expect(content.randomNumber()).toBe(10)
    expect(content.randomNumber).toHaveBeenCalled();
  })
  // it('should return true when checking for isdivisible of an even number',()=>{
  //   content.randomNumber = jest.fn().mockReturnValue(10)
  //   expect(content.isDivisible(10)).toBe(true);
  // })
  it('should react accordingly when returning different values',()=>{
    content.randomNumber = jest.fn()
      .mockReturnValue(10)
      .mockReturnValueOnce(44)
      .mockReturnValueOnce(33)
    
    expect(content.isDivisible(2)).toBe(true)
    expect(content.isDivisible(3)).toBe(true)
    expect(content.isDivisible(10)).toBe(true)
  })
})