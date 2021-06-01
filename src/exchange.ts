import { EmailAccount } from "./email";

export class ExchangeEmailAccount extends EmailAccount {

  constructor(name: string) {
    super('Exchange', name);
  }

}
