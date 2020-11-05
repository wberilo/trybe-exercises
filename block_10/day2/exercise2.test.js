const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then((user) => user.name);
};

describe('check username', () => {
  it(`check if returns Mark's name`, () => {
    return getUserName(4).then((result) => expect(result).toBe('Mark'));
  });
  it(`check for errors`, () => {
    return getUserName(6).catch((error)=> expect(error).toEqual({"error": "User with 6 not found."}))
  })
});

describe('check username', () => {
  it(`check if returns Mark's name`, async (done) => {
    const response = await getUserName(5)
    expect(response).toBe('Paul')
    done();
  });
  it(`check if returns Mark's name`, async (done) => {
    const response = await getUserName(4)
    expect(response).toBe('Mark')
    done();
  });
  it(`should return an error`, async () =>{
    try{
      await getUserName(6)
    } catch (error) {
      expect(error).toEqual({"error": "User with 6 not found."})
    }
  })
});
