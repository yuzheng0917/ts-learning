interface Person {
  readonly id: number;
  name: string;
  age?: number;
}

let yuzheng: Person = {
  id: 123,
  name: "yuzheng",
};

// 类型推论
let str = "str";
str = "str1";
