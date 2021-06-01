import { EmailAccountProperties, EmailAccount } from './email';
import * as path from 'path';

interface MUASettings {
  accountsdb: string
}

export class MailUserAgent {

  private _path: string = '';

  static AccountsDBFilename: string = 'accounts';

  settings: MUASettings = {
    accountsdb: 'accounts'
  }

  constructor(path: string) {
    this._path = path;
  }

  get path() {
    return this._path;
  }

  get accountsDBFilepath() {
    return path.resolve(this.path, MailUserAgent.AccountsDBFilename);
  }

  static init(path: string) {
    return new MailUserAgent(path);
  }

  static createAccount(path: string, account: EmailAccount) {
    let mua = MailUserAgent.init(path);
    return EmailAccount.create(mua.accountsDBFilepath, account);
  }

}

export { EmailAccountProvider } from './email';
