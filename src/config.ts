import * as fs from 'fs';
import * as path from 'path';
import * as yaml from 'js-yaml';

export interface Configurations {
  mongoURI: string;
}

export enum RuntimeProfile {
  default = 'default',
  override = 'override',
}
const overrideConfigExist: boolean = fs.existsSync(
  path.resolve('config/config.override.yaml'),
);

type Profile = RuntimeProfile;

let profile: Profile =
  (process.env.profile as Profile) || RuntimeProfile.default;

if (overrideConfigExist) {
  profile = RuntimeProfile.override;
}

export let config: Configurations;

try {
  console.log(`profile: ${profile}`);
  config = yaml.safeLoad(
    fs.readFileSync(path.resolve(`config/config.${profile}.yaml`), 'utf-8'),
  ) as Configurations;
} catch (e) {
  throw new Error(e);
}

export default config;
