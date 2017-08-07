# Material2Docs

Welcome to `material2-docs` (unofficial)! This is basically the same as Angular's <https://material.angular.io>, but with more examples and a copy code button, along with app showcases (currently work in progress).

## Development server

You can develop locally by following these steps _(and make a pull request)_:

1. Execute the following code in your Terminal:
    
    ```bash
    npm install # Install dependencies
	npm install @angular/flex-layout@latest # Installs the latest version of flex-layout since npm keeps installing the depreceated version (aka 2.0.0-rc.1)
    npm start # Serves the app
    ```

    _For more info on what the `serve` command does, basically it will do a syntax highlight from the `examples/` folder, similar to how [Angular](https://github.com/angular/material.angular.io/blob/master/tools/syntax-highlight.js) does it for their docs._

	**For other commands, go to [misc](#misc)**
2. Navigate to `localhost:4200` for the app. Done!

## Contributing

As stated above (in [Development server](#development-server)), you can contribute by:
     
- Reporting issues
- Submitting pull requests

And you may get a chance to contribute! :smile: :tada:

## Website

The website is available at <https://chan4077-material2-docs.firebaseapp.com>
## LICENSE

View the [LICENSE (`MIT`)](/LICENSE)

_(Did you know?)_ I thought of this idea when many people were confused over how to trobuleshoot common errors, especially on [StackOverflow](https://stackoverflow.com/tags/angular-material2)!

## TODO
- Add a document on how to contribute
- Get more contributors
- Make docs simpler
- Faster loading times on firebase
## Misc
This section is for other commands listed in the `package.json` and what they do.

- ```bash
  npm run serve 
  ```
  Serves the app, which is what `npm start` does.
- ```bash
  npm run serveProd
  ```
  Serves the app, similar to `npm run serve`, but the environment is `production` instead.
- ```bash
  npm run installDeps
  ```
  Install dependencies (Use `npm install` instead, will be removed soon)
- ```bash
  npm run firebaseDeploy
  ```
  Deploys to firebase. Note that you can't execute this apart from the owner and those who can access the project's firebase. It basically does syntax highlighting, then builds the app in `production` mode and deploys to firebase using the [Firebase CLI](https://firebase.google.com/docs/cli/).
- ```bash
  npm run syntaxHighlight
  ```
  Does a syntax highlight of the `examples/` folder, as what the name of the command states. Note that the highlighting will take about 30 seconds to 1 minute to finish. It is used in the following commands:
  ```bash
  npm start
  npm run serve
  npm run serveProd
  npm run firebaseDeploy
  ```
  For more information and behind the scenes, go to [this shell file](./tools/highlight-examples.sh) and [the nodejs file](./tools/syntax-highlight.js)

## Status
- The project is still a work in progress and should be completed by September
- However, I may not have time in-between because of important things and others
- Will continue by September holidays (aka 4 September)