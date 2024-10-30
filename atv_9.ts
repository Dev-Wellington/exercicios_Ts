const reverterArray = <T>(items: T[]): T[] => {
  const filtrar = items.filter(item => typeof item === "number" || typeof item === "string");
  return filtrar.reverse();
};

console.log(reverterArray([1, 2, 3])); // [3, 2, 1]
console.log(reverterArray(["a", "b", "c"])); // ["c", "b", "a"]
console.log(reverterArray([true, false]));
console.log(reverterArray([1, 2, "a", "z", 1])); 
console.log(reverterArray([1, "z", true, null, 5.5]));
