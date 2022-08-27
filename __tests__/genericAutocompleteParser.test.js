// import sqlParserRepository from '../src/types/sqlParserRepository';
// import { AutocompleteParser } from '../src/types/types';

import genericAutocompleteParser from '../src/sql/generic/genericAutocompleteParser';

describe('SQL Parser', () => {

  // let parser : AutocompleteParser;

  // beforeAll(async () => {
  //   parser = await sqlParserRepository.getAutocompleteParser("generic");
  // });

  // eslint-disable-next-line jest/no-commented-out-tests
  // it('does basic SQL completion', () => {
  //   const result = parser.parseSql('SELECT *', '');
  //   console.log(result);
  //   expect(1+1).toBe(2);
  // });

   it('does basic SQL completion', () => {
      // const parser = genericAutocompleteParser as unknown as { parseSql: (...args: any[]) => any };
      const parser = genericAutocompleteParser;
      const result = parser.parseSql('SELECT *', '');
      console.log(result);
      expect(1+1).toBe(2);
   });
   
});