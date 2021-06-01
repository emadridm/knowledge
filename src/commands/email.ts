import { Command, flags } from '@oclif/command';
import { AppSettings, GetAppSettings } from '../settings';
import { MailUserAgent, EmailAccountType } from '../mua';
import * as util from 'util';
import { EmailAccountProvider } from '../email';
import { ExchangeEmailAccount } from '../exchange';

export default class Email extends Command {
  static description = 'add, modify or remove an email account';

  static flags = {
    help: flags.help({ char: 'h' }),
    // flag with no value (-v, --verbose)
    verbose: flags.boolean({ char: 'v' }),
    // account type (-t, --type=VALUE)
    type: flags.string({ char: 't', description: 'account type' }),
    // email address (-a, --address=VALUE)
    address: flags.string({ char: 'a', description: 'email address' }),
    // email username (-u, --username=VALUE)
    username: flags.string({ char: 'u', description: 'email username' }),
    // email password (-p, --password=VALUE)
    password: flags.string({ char: 'p', description: 'email password' }),
    // account sign in (-i, --signin)
    signin: flags.boolean({ char: 'i', description: 'sign in' }),
    // account sign out (-o, --signout)
    signout: flags.boolean({ char: 'o', description: 'sign out' }),
    // account edit (-m, --modify)
    modify: flags.boolean({ char: 'm', description: 'modify account' }),
    // account edit (-m, --remove)
    remove: flags.boolean({ char: 'r', description: 'remove account' }),
    // list accounts (-l, --list)
    list: flags.boolean({ char: 'l', description: 'list email accounts' })
  }

  static args = [{ name: 'name', description: 'account name' }]

  async run() {

    console.log('WIP:');

    const { args, flags } = this.parse(Email);
    console.log(util.inspect(args, {
      showHidden: false,
      depth: null,
      colors: true
    }));
    console.log(util.inspect(flags, {
      showHidden: false,
      depth: null,
      colors: true
    }));
    try {
      if (args.name) {
        let settings: AppSettings = await GetAppSettings();
        let account = new ExchangeEmailAccount(args.name);
        account.address = 'enrique.madrid@italtel.com';
        account = await MailUserAgent.createAccount(settings.muahome, account);
        console.log(util.inspect(account, { showHidden: false, colors: true, depth: 2 }))
      }
      //   account.email(flags.address);
      //   account.username(flags.username);
      //   account.password(flags.password);
      //   await account.signin();
    } catch (error) {
      console.log(error);
    }

  }
}
