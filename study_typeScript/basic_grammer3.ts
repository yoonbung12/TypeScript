// function에 대하여
// function add(a:number, b:number) {
//     return a + b;
// }
// 화살표함수로 바꿈
const add = (a: number, b: number) => a + b;

// call signature
type Add = (a: number, b: number) => number;
const add2: Add = (a, b) => a + b;

// OverLoading
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === 'string') {
    console.log(config);
  } else {
    console.log(config.path);
  }
};
