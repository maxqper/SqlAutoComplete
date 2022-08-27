import genericAutocompleteParser from '../src/sql/generic/genericAutocompleteParser.js';

const parser = genericAutocompleteParser;
const result = parser.parseSql('SELECT * F', '');
console.log(result);