export const benchmarkFunction = async function (fn, ...args) {
  const startTime = new Date();
  await fn(...args);
  const curTime = new Date();
  console.log(`The function ${fn.name} took ${curTime - startTime} ms to run`);
};
