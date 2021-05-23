import * as os from 'os';
import * as path from 'path';

class Settings {

  static userhome = os.homedir();
  static pathname = 'knowledge';
  static filename = 'settings.json';

  repository: string;

  constructor() {
    this.repository = path.resolve(Settings.userhome, Settings.pathname);
  }

  public load(): void {

  }

  public save(): void {

  }

}

export { Settings }
