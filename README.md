> This repo is now **deprecated**. Please use the official docs by the Angular Material team available at <https://material.angular.io> instead.

# Material Docs

Welcome to `material-docs` (unofficial)! This is basically the same as Angular's <https://material.angular.io>, but with more examples along with app showcases (currently work in progress).

## Development server

You can develop locally by following these steps _(and make a pull request)_:

1. Execute the following code in your Terminal:
    
    ```bash
    npm install # Install dependencies and install the latest version of @angular/flex-layout
    npm start # Serves the app
    ```

    _For more info on what the `serve` command does, basically it will do a syntax highlight from the `examples/` folder, similar to how [Angular Material](https://github.com/angular/material.angular.io/blob/master/tools/syntax-highlight.js) does it for their docs._

	**For other commands, go to [misc](#misc)**
2. Navigate to `localhost:4200` for the app. Done!

## Contributing

As stated above (in [Development server](#development-server)), you can contribute by:
     
- Reporting issues
- Submitting pull requests

And you may get a chance to contribute! :smile: :tada:

## Website

- The website is available at <https://chan4077.github.io/material-docs>
- View all of the examples at <https://material2-docs-all-examples.stackblitz.io>

## LICENSE

View the [LICENSE (`MIT`)](/LICENSE)

_(Did you know?)_ I thought of this idea when many people were confused over how to trobuleshoot common errors, especially on [StackOverflow](https://stackoverflow.com/tags/angular-material2)!

## TODO
- Get more contributors
- Make docs simpler
- Faster loading times on firebase
- Add hash handling
- Faster syntax highlighting
- Watch example file and syntax highlight when there are changes

## Misc
This section is for all commands listed in the `package.json` and what they do.

### Commands
Command | Description
---|---
`serve` | Highlights all example files, then serves the app.
`serveProd` | Similar to the `serve` command, but the environment is set to `production` mode.
`firebaseDeploy` | Deploys the app to firebase. **(PRIVATE)**
`firebaseDeploy2` | Similar to the `firebaseDeploy` command, but without highlighting all example files. **(PRIVATE)**
`syntaxHighlight` | Does a highlight of all example files and will take ~1 minute to highlight.

#### Usage

```bash
npm run *
```
Where you have to replace `*` with one of the [commands](#commands)

### Screenshots

![Homepage](./src/assets/img/material2-docs%20screenshot1.jpg)