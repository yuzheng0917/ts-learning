function echo<T>(arg: T): T {
  return arg;
}
const result: number = echo(123);

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}
const result2 = swap(["string", 123]);

function echoWithArray<T>(arg: T[]): T[] {
  console.log(arg.length);

  return arg;
}
const result3 = echoWithArray([1, 2, 3, "4"]);

interface IWithLength {
  length: number;
}
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}
const result4 = echoWithLength([1, 2, 3]);
const result5 = echoWithLength({ name: "lili", length: 10 });

class Queue<T> {
  private data = [];
  push(item: T) {
    this.data.push(item);
  }
  pop(): T {
    return this.data.shift();
  }
}
const queue1 = new Queue<number>();
queue1.push(1);
console.log(queue1.pop().toFixed());
const queue2 = new Queue<string>();
queue2.push("str1");
console.log(queue2.pop().length);

interface KeyPair<T, U> {
  key: T;
  value: U;
}

const kpr: KeyPair<string, number> = { key: "yuzheng", value: 23 };

const arr: number[] = [1, 2, 3];
const arr1: Array<number> = [1, 2, 3];

interface IPlus<T> {
  (a: T, b: T): T;
}
function plus(a: number, b: number): number {
  return a + b;
}
function connect(a: string, b: string) {
  return a + b;
}
const a: IPlus<number> = plus;
const b: IPlus<string> = connect;
