async function asyncFunc(): Promise<any> {
  const val = await new Promise((resolve) => {
    setTimeout(() => {
      resolve('Proc...');
    }, 1000);
  });

  return val;
}

asyncFunc().then(console.log);
