// ❌ This will FAIL in native Node.js (v23.6+)
// because an 'enum' creates a real JavaScript object at runtime.

enum Status {
  Pending,
  Active,
  Done,
}

const current: Status = Status.Active;
console.log(`The status is: ${current}`);

// ❌ This will also FAIL
// 'parameter properties' (using public/private in a constructor)
// require the compiler to desugar them into assignments.

class User {
  constructor(public name: string) {}
}

const me = new User("Dev");
console.log(me.name);
