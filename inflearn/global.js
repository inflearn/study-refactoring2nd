global.log = console.log;

function equals(origin, ...targets) {
  return targets.every(
    (target) => target === origin || JSON.stringify(target) === JSON.stringify(origin),
  );
}

global.checkDiffrence = (data) => {
  if (equals(data)) {
    return;
  }
  const [origin, targets] = data;
  const diffrentTaraget = targets.find((target) => origin !== target);
  console.log(`origin: ${origin}, diffrent: ${diffrentTaraget}}`);
  throw new Error('not equal');
};
