// DefinitelyTyped/gitHub에서 볼것 많은 패키지들이 존재
// import { init, exit } from './myPackage';

// exit(1);

// localStorage.clear;

// class Block {
//   constructor(private data: string) {}
//   static hello() {
//     return 'hi';
//   }
// }

console.log('hi');

// 블록체인 맛보기
import cryto from 'crypto';
interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return cryto.createHash('sha256').update(toHash).digest('hex');
  }
}

class BlockChain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return '';
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newBlock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newBlock);
  }
  public getBlocks() {
    return [...this.blocks];
  }
}

const blockChain = new BlockChain();

blockChain.addBlock('First one');
blockChain.addBlock('Second one');
blockChain.addBlock('Third one');

console.log(blockChain.getBlocks());
