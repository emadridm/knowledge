abstract class Account {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

abstract class EmailAccount extends Account {
  constructor(name: string) {
    super(name);
  }
}

class ExchangeEmailAccount extends EmailAccount {
  constructor(name: string) {
    super(name);
  }
}
