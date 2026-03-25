class Animal {
  constructor(type) {
    this.type = type;
  }

  detail() {
    console.log(this.type + "is my type");
  }
}

const an = new Animal("wtf");
an.detail();
