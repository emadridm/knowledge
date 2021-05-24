import * as os from 'os';
import * as path from 'path';
import * as fsPromises from 'fs/promises';

const appname = 'knowledge';
const apphome = path.resolve(os.homedir() || '', appname);

export const filename = 'settings.json';
export const filepath = path.resolve(apphome, filename);

export interface AppSettings {
  repository: string;
}

export const DefaultAppSettings: AppSettings = {
  repository: path.resolve(apphome, 'data')
}

export function LoadAppSettings() {
  fsPromises.readFile(filepath)
    .then((data) => {
      return { ...DefaultAppSettings, ...JSON.parse(data.toString()) }
    })
}

// export function GetAppSettings() {
//   let appSettings: AppSettings = DefaultAppSettings;
// }
