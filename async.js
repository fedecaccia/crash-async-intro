const getStr = (name, timeout) => {
// function getStr (name, timeout) {
  return new Promise ((resolve, reject) => {
    setTimeout(
      function () {
        return resolve(`hello world from ${name}`)
      }, 
      timeout
    );
  });
}

const execute1 = async (timeout) => {
// async function execute1 (timeout) {
  const name = "execute1";
  let str;
  try{
    str = await getStr(name, timeout);
    console.log(str);
  } catch (err) {
    console.log(`Error found: ${err}`);
  }
}

const execute2 = (timeout) => {
// function execute2 (timeout) {
  const name = "execute2";
  getStr(name, timeout)
    .then((res) => console.log(res))
    .catch((err) => console.log(`Error found: ${err}`));  
}

execute1(500);
execute2(2000);