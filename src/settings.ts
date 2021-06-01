import * as os from 'os';
import * as path from 'path';
import * as fsPromises from 'fs/promises';
import * as readline from 'readline';

const appname = 'knowledge';
const apphome = path.resolve(os.homedir() || '', appname);

export const filename = 'settings.json';
export const filepath = path.resolve(apphome, filename);

export interface AppSettings {
  repository: string,
  muahome: string
}

export const DefaultAppSettings: AppSettings = {
  repository: path.resolve(apphome, 'data'),
  muahome: path.resolve(apphome, 'email')
}

async function LoadAppSettings(): Promise<AppSettings> {
  let appSettings: AppSettings;
  try {
    console.log(`loading app settings from ${filepath} file...`);
    let data = await fsPromises.readFile(filepath);
    console.log('app settings loaded!');
    appSettings = { ...DefaultAppSettings, ...JSON.parse(data.toString()) };
  } catch {
    console.log('app settings does not exists!')
    appSettings = DefaultAppSettings;
  }
  return appSettings;
}

async function SaveAppSettings(settings: AppSettings) {
  try {
    console.log(`saving app settings at ${filepath} file ...`);
    await fsPromises.mkdir(apphome, { recursive: true });
    await fsPromises.writeFile(filepath, JSON.stringify(settings));
    console.log('settings saved!');
  } catch {
    console.log('app settings can not be saved!');
  }
}

function EntryAppSetting(setting: string): Promise<string> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise<string>((resolve) => {
    rl.question(setting, (answer) => {
      resolve(answer)
    })
  }).finally(() => {
    rl.close();
  })
}

async function ReadAppSettings(ds: any) {
  let k: keyof typeof ds;
  try {
    for (k in ds) {
      if (typeof ds[k] == 'object') {
        ds[k] = await ReadAppSettings(ds[k]);
      } else {
        let entry: string = await EntryAppSetting(`${k} [${ds[k]}]: `);
        if (entry) {
          ds[k] = entry;
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
  return ds;
}


export async function GetAppSettings(): Promise<AppSettings> {
  let appSettings: AppSettings = DefaultAppSettings;
  try {
    appSettings = await LoadAppSettings();
    if (appSettings == DefaultAppSettings) {
      console.log('entry preference settings ...');
      appSettings = await ReadAppSettings(appSettings);
      await SaveAppSettings(appSettings);
    }
  } catch {
    console.log("something was wrong!");
  }
  return appSettings;
}
