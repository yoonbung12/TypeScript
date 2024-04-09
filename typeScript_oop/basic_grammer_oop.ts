abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    private nickName: string
  ) {}
  abstract getNickName(): void; // call signature
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
// 추상클래스를 상속만 받을수 있고, 직접적으로는 인스턴스 생성은 불가
class Player2 extends User {
  getNickName(): void {
    //console.log(this.nickName); 이거는 사용못함 이유는 private property로 만들었기 때문 But protected를 사용하면 접근 가능!!!!
  }
}

const bon = new Player2('bon', 'gu', '봉봉');
// const bon = new User('bon', 'gu', '봉봉'); // 직접 인스턴스 생성은 XX
bon.getFullName();
