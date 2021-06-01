import { Account, AccountType } from './account';
import * as Realm from "realm";
import * as bson from 'bson';

export enum EmailAccountProvider {
  Google = 1,
  Outlook,
  Hotmail,
  Live,
  Yahoo,
  Exchange,
  Office365,
  Other
}

export interface EmailAccountProperties {
  provider: EmailAccountProvider,
  name: string,
  address?: string,
  username?: string,
  password?: string,
  status?: string
}

export abstract class EmailAccount extends Account {

  _id?: bson.ObjectID;
  provider: string;
  name: string;
  address?: string;
  username?: string;
  password?: string;
  status?: string;

  static schema = {
    name: "EmailAccount",
    properties: {
      _id: "objectId",
      provider: "string",
      name: "string",
      address: "string",
      username: "string?",
      password: "string?",
      status: "string?"
    }
  }

  static async create(dbfilepath: string, account: EmailAccount): Promise<EmailAccount> {
    try {
      const realm = await Realm.open({
        path: dbfilepath,
        schema: [EmailAccount]
      })
      realm.write(() => {
        account._id = new Realm.BSON.ObjectID();
        account = realm.create<EmailAccount>(EmailAccount.schema.name, account);
      });
      realm.close();
    } catch (reason) {
      console.log(reason);
    }
    return account;
  }

  constructor(provider: 'Exchange', name: string) {
    super(AccountType.Email);
    this.provider = provider;
    this.name = name;
  }

}
