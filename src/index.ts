import { User } from './models/User';

class UserAccount implements User {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = {
  name: 'Hayes',
  id: 0
};

let isCool = true;
let bigInt: BigInt = BigInt(9007199254740991);

console.log(user.name);
