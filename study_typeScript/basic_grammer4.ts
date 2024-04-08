// 다형성
type SuperPrint = {
  // 제네릭 <>
  // T,M ==  인자값
  <T, M>(arr: T[], b: M): T;
  <T>(arr: T[]): T;
  //   (arr: boolean[]): void;
  //   (arr: string[]): void;
  //   (arr: (number | boolean)[]): void; // 별로 추천하지 않는다. 모든 가능성을 조합해서 만들어야 해서.
};
const superPrint: SuperPrint = (arr) => arr[0];

// const f = superPrint([1, 2, 3.4], '2222');
const g = superPrint([true, false, true]);
const h = superPrint(['a', 'b', 'c']);
const i = superPrint([1, 2, true]);

// const superPrint: SuperPrint = (arr) => {
//   arr.forEach((i) => console.log(i));
// };

// superPrint([1, 2, 3.4]);
// superPrint([true, false, true]);
// superPrint(['a', 'b', 'c']);
// superPrint([1, 2, true]);
