"use strict";

type User = {
  name: string;
  age: number;
};

// If this function is true, treat this value as a User
function isUser(value: unknown): value is User {
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    "age" in value
  );
}

function process(value: unknown) {
  if (isUser(value)) {
    console.log(value.name); // value is User here
  }
}
