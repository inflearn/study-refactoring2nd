global.log = console.log;

global.check = (...as) => {
  // log(as.length);
  const [a, ..._as] = as;
  for (let _a of _as) {
    if (_a !== a && JSON.stringify(_a) !== JSON.stringify(a)) {
      log(a);
      log(_a);
      throw new Error('not equal');
    }
  }
  return a;
};
