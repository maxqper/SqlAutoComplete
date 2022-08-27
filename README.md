# SQL Auto Complete

Extracted from Hue https://github.com/cloudera/hue

# Generate 

```
cd tools
node generateParsers.js generic
```

# Install

```
npm install https://github.com/maxqper/SqlAutoComplete
```

# Use
```
import genericAutocompleteParser from "sql-auto-completer/src/sql/generic/genericAutocompleteParser";
let parserCompletions = genericAutocompleteParser.parseSql(beforeCursorValue, afterCursorValue);
```


