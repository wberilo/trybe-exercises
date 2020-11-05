const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

it('expect to be uppercase', (done) => {
  uppercase('text', (str) => {
    expect(str).toBe('TEXT');
    done();
  });
});