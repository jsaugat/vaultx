const getName = <T>(arg: T): T => {
  return arg;
};

console.log(
  getName({
    id: "someid",
    name: "Alisha",
  }),
);

const getAge = (data: any) => {
  return data;
};
console.log(
  getAge({
    age: 90,
    name: "Alisha",
  }),
);
