# GTA V Tattoo Extractor

GTA V Tattoo Extractor is a tool made to extract relevant tattoo data from GTA V overlays metadata. This makes getting all tattoos hashnames, collections, gender and more *really* easy to extract.

**Currently**, the tool will print out a Lua-formatted object, containing the collection, hashname and gender of a detected tattoo.

The way this tool works makes it really easy to extract other stuff than tattoo metadata. Anyone with basic JS experience should be able to do it.

## Installation
### Prerequisites
* Node =>8 (this tool uses async/await)
* Yarn (preferred, NPM will work just fine)
* A brain if you need to parse and print other tattoo data

```bash
yarn
```

## Usage

* Have all XML (or .meta, didn't try but should work just fine) overlay metadata in the `tattoos_xml` folder. You should use OpenIV or CodeWalker to extract these files from the game files.
* Then, run
```bash
yarn start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)