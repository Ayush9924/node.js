const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) resolve("Task Completed ✅");
  else reject("Task Failed ❌");
});

myPromise
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));
