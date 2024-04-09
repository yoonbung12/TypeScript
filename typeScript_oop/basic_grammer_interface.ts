// type NickName = string;
// type HealthBar = number;
// type Player3 = {
//   nickName: NickName;
//   healthBar: HealthBar;
//   //   nickName: string;
//   //   healthBar: number;
// };

// const nico2: Player3 = {
//   nickName: 'nico2',
//   healthBar: 10,
// };

// type Food = string;
// const kimchi: Food = 'delicious';

type Team = 'red' | 'blue' | 'yellow';
type Health = 1 | 5 | 10;

interface Player3 {
  nickName: string;
  team: Team;
  health: Health;
}

const nico3: Player3 = {
  nickName: 'nico3',
  team: 'red',
  health: 5,
};

///// User Interface ***** Interface는 JS에게 오브젝트 모양을 설명해 주기 위해 존재함.
interface User {
  name: string;
}

interface Player4 extends User {}

const nico4: Player4 = {
  name: 'nico4',
};
