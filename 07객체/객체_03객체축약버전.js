const x = 0;
const y = 0;
const coordinate = { x, y }; // { x: x, y: y };
console.log(coordinate); // { x: 0, y: 0 }

function makeObj(name, age) {
  return {
    name, // name: name,
    age, // age: age,
  };
}
