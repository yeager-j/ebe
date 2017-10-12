export class User {
  constructor(
    public _id: string,
    public name: string,
    public email: string,
    public rank: number,
    public type: string,
    public date_created: Date
  ) { }

  rankName() {
    switch (this.rank) {
      case 0:
        return 'Admin';
      case 2:
        return 'Member';
    }
  }

  get admin() {
    return this.rank === 0;
  }

  set admin(value) {
    if (value) {
      this.rank = 0;
    } else {
      this.rank = 2;
    }
  }
}
