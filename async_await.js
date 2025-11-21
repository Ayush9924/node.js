function getName() {
  return new Promise((res) => {
    setTimeout(() => res("Ayush"), 2000);
  });
}

async function showName() {
    console.log("am 1st")
    const name = await getName();
    console.log("My name is", name);
}

showName();
