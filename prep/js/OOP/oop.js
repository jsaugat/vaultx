// Object Literal
const user = {
  name: "Saugat",
  username: "jsaugat",
  getUsername: function () {
    return this.username;
  },
};

//! This type of function is valid but readability sucks and thats why classes exist
// Constructor Function
function UserFunc(username, email) {
  this.username = username;
  this.email = email;
}
const user1 = new UserFunc("saugat", "saugat@gmail.com"); // UserFunc { username: 'saugat', email: 'saugat@gmail.com' }

// Class
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return this.password + "secret";
  }
}

const realuser1 = new User("sau", "gatec@gmail.com", "sexysaugat"); // User { username: 'sau', email: 'gatec@gmail.com' }
console.log(realuser1.encryptPassword());
