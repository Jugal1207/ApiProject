import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

//Build the absolute path to the YAML file using the current working directory.
const locatorspath = path.join(process.cwd(),'config','locators.yaml');
console.log('loading locators from', locatorspath );//Debug log

//Read and load the yaml file content into A javascript object.
export const locators = yaml.load(fs.readFileSync(locatorspath,'utf8'));