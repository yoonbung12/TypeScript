// TS의 독특한 타입
// 1. 변수의 타입을 알지 못할때 unknown을 사용
let d: unknown;
if (typeof d === 'number') {
  let e = d + 1;
}
if (typeof d === 'string') {
  let e = d.toUpperCase;
}

// 2. void (return을 하지 않는다.) --- 주로 많이 사용한다.
function hello() {
  console.log('x');
}

// 3. never( return하지 않고 오류를 발생시키는방법)
function bye(): never {
  throw new Error('안돼!!!');
}

function hello2(name: string | number) {
  if (typeof name === 'string') {
    name;
  } else if (typeof name === 'number') {
    name;
  } else {
    name; // 이건 절대 실행되어서는 안됨!!!!
  }
}
