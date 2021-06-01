export enum AccountType {
  Email = 0,
  WhatsApp,
  MSTeams,
  WebExTeams,
  WebSite,
  Knowledge
}

export abstract class Account {
  private _type: AccountType;
  get type() {
    return this._type;
  }
  constructor(accountType: AccountType) {
    this._type = accountType;
  }
}
