<a name="top"/>

# Table of contents
- [Welcome](#welcome)
- [List of everything](#list-of-everything)
  - [Components](#components)
    - [`code-viewer`](#code-viewer)
	  - [Notes](#notes)
    - [`example-viewer`](#example-viewer)
	- [`api-method-viewer`](#api-method-viewer)
  - [Interfaces](#interfaces)
---
# Welcome
Welcome to the getting started documentation for if you want to contribute. In this file, you can access all the methods, interfaces etc. for the docs.

# List of everything
## Components

### `code-viewer`
```html
<code-viewer>&lt;button md-button&gt;
	Content here
&lt;/button&gt;</code-viewer>
```
Input | Description | Value(s) | Required?
---|---|---|---
`language` | The language of the code in the component | All accepted values by `highlight.js` | `true`
`fileName` | When specified, it will show the file name at the bottom right. | `string` | `false`

#### Notes
- Please follow the syntax as in the sample code snippets above since the `pre` element considers whitespaces

### `example-viewer`

`my-app-comp.html`:
```html
<example-viewer [exFiles]="buttonTypes" docsId="button-types" docsTitle="Button Types"></example-viewer>
```
`my-app-comp.ts`:
```ts
/*
Note: CodeFiles is available at src/app/shared/shared.docs, assuming you're at the root of the project.
Also: Excerpt from `examplebutton.component.ts`
*/
import { CodeFiles } from './path/to/shared.docs';
import { OnInit, Component } from '@angular/core';

@Component({
	selector: 'my-app-comp',
	templateUrl: 'my-app-comp.html'
})
export class MySampleComponent implements OnInit {
	buttonTypes: CodeFiles;
	ngOnInit() {
		this.buttonTypes = {
            filePath: [
                'assets/examples/button/button-types.html',
                'assets/examples/button/button-types.ts',
                'assets/examples/button/button-types.css'
            ],
            highlightPath: [
                'assets/highlighted/button-types-html.html',
                'assets/highlighted/button-types-ts.html',
                'assets/highlighted/button-types-css.html'
            ],
            componentName: ButtonTypesExample
		}
	}
}
```
Input | Description | Value(s) | Required?
---|---|---|---
`exFiles` | Used to retrieve stuff for the example. | `CodeFiles` | `true`
`docsId` | The id of the example. Can be used for fragments. | `string` | `true`
`docsTitle` | The title of the example. | `string` | `true`
`masterBuild` | Whether the example can only run on the latest master build. | `boolean` | `false`
`externalComponent` | Other components used in the example. | `CodeExternalComponent[]` | `false`
`guideView` | Whether to change the viewer to a guide viewer (now deprecated, no change to UI) | `boolean` | `false`

### `api-method-viewer`

## Interfaces
### `CodeExternalComponent[]`
