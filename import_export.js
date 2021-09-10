// ! From Fireship.io
// * Import & Export aka Module - Cheatsheet -> ES6 and the modern way (the old is using REQUIRE)
// OLD:
const myPackage = require('something');

// Name Export
export const name = 'value'
// Name Import
import { name } from 'module';

// Default Export
export default 'value'
// Default Import
import anyName from '...';

// Rename export
export { name as newName }
// Name Import
import { newName } from '...';

// Export List + Rename
export {
  name1,
  name2 as newName2
};
// Import List + Rename
import {
  name1 as newName1,
  newName2
} from '...';