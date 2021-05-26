import { Command, flags } from '@oclif/command';
import { AppSettings, GetAppSettings } from './../settings';
import * as util from 'util';

export default class Init extends Command {
  static description = 'init app settings'

  static flags = {
    help: flags.help({ char: 'h' })
  }

  async run() {
    try {
      console.log('get app settings ...')
      let appSettings: AppSettings = await GetAppSettings();
      console.log(util.inspect(appSettings, {
        showHidden: false,
        depth: null,
        colors: true
      }));
    } catch {
      console.log('error configuring knowledge!')
    }
  }
}
