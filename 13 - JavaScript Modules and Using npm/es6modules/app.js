import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
import { apiKey, url, sayHi, age as old, dog } from './src/config';
import User, { createURL, gravatar } from './src/user';

const ages = [1, 2, 4, 5, 6, 32];

console.log(apiKey, url);

sayHi('Chris');

console.log(old, dog);

const chris = new User('Chris Seifert', 'ccseifert@gmail.com', 'endlessdreaming.com');
const profile = createURL(chris.name);
const image = gravatar(chris.email);
console.log(image);
