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
`language` | The language of the code in the component | All accepted values by [`highlight.js`](https://github.com/isagalaev/highlight.js/tree/master/src/languages) | `true`
`fileName` | When specified, it will show the file name at the bottom right. | `string` | `false`

[Source code](https://github.com/Chan4077/material2-docs/blob/master/src/app/shared/code-viewer.docs.ts)
#### Notes
- Please follow the syntax as in the sample code snippets above since the `pre` element considers whitespaces

### `example-viewer`

`my-app-comp.html`:
```html
<example-viewer [exFiles]="buttonTypes"></example-viewer>
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
            componentName: ButtonTypesExample,
			url: 'button/button-types'
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

[Source code](https://github.com/Chan4077/material2-docs/blob/master/src/app/shared/example-viewer.docs.ts)
### `api-method-viewer`

## Interfaces
### `CodeExternalComponent`
Attribute | Description | Value(s) | 
Required?
---|---|---|---
`link` | The link of the external component docs | `string` | `true`|
`name` | The name of the external component docs | `string` | `true`|

#### Notes
- This interface is used in [`CodeFiles`](#codefiles) for any other components that an example uses

### `CodeFiles`
Attribute | Description | Value(s) | Required?
---|---|---|---
`filePath` | The paths to the example files for use with the source code tabs (Take note that order matters!) | `string[]` | `true`
`highlightPath` | The paths to the syntax highlighted example files for use with the source code tabs (Take note that order matters!) | `string[]` | `true`
`componentName` | The component for the example | `Type<any>` | `true`
`url` | The id of the demo for use with Stackblitz | `string` | `true`
`title` | The title of the example | `string` | `true`
`notices` | Any notices about the example (such as needing a specific version, or using another component etc.) | [`CodeNotices[]`](#codenotices) | `false`
#### Notes
- This interface is used for examples and is specified into the [`example-viewer`](#example-viewer) `exFiles` attribute.

### `CodeNotices`
Attribute | Description | Value(s) | Required?
---|---|---|---
`name` | The notice name (such as ≥2.0.0-beta.10 etc.) | `string` | `true`
`desc` | The description of the notice (to be used as a tooltip) | `string` | `true`
`link` | The link of the chip to go to | `string` | `false`
`icon` | The icon of the chip (such as `warning`; ensure that it's in [Material icons](https://material.io/icons)) | `string` | `false`
`color` | The color of the chip | `"primary"|"accent"|"warn"` | `false`