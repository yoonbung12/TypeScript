// 명시적으로만 해야할때 작성해야함. 왠만하면 타입스크립가 추로핸서 간략하게 작성해도됨
const a: number[] = [1, 3, 4];
const b: string[] = ['a', 'b', 'c'];
const c: boolean[] = [true];

// type Alias를 지정하여서 name, age를 중복하기 피할것
type Player = {
  name: string; // name 앞에 readonly를 지정하면 수정을 불가능하게 할수 있다(불변성)
  age?: number;
};
const bonggu: Player = {
  name: 'bonggu',
};

const gilgu: Player = {
  name: 'gilgu',
  age: 18,
};

function playerMaker(name: string): Player {
  return {
    name: name,
  };
}
const nico = playerMaker('nico');
nico.age = 12; // function playMaker에서 Player를 지정해주지 않으면 오류가 발생(찾지못하기 때문에)
// // optinal타입에 대하여
// const player: {
//   name: string;
//   age?: number; // 물음표는 객체에 있어서 나이를 가져도 되고 없어도 되는것을 허용하기 위해서 사용
// } = {
//   name: 'bonggu',
// };

// Tuple에 대하여

const player: [string, number, boolean] = ['noc', 5, true]; // Tuple쓰기전 array안에 인자값의 갯수가 정해질때 사용

// any의 사용 이유
// 1. 타입스크립트에서 빠져나와서 사용해야할때
// 2. js가 되어버림.(좋지못하다..)
