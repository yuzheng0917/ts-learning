class Animal {
  static categories: string[] = ["nammal", "bird"];
  static isAnimal(ist) {
    return ist instanceof Animal;
  }
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }

  run() {
    return `${this.name} is running`;
  }
}

let snake = new Animal("jack");

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

let duoduo = new Dog("duoduo");

class Cat extends Animal {
  constructor(name: string) {
    super(name);
    console.log(name);
  }
  run() {
    return `wait, ` + super.run();
  }
}
let mimi = new Cat("mimi");

interface Radio {
  switchRadio(): void;
}

interface Battery {
  checkBattery();
}

interface BatteryWithRadio extends Radio {
  checkBattery();
}

class Car implements BatteryWithRadio {
  switchRadio() {}
  checkBattery() {}
}

class CellPhone implements Radio, Battery {
  switchRadio() {}
  checkBattery() {}
}
