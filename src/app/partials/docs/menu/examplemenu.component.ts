import { IconMenuExample } from './../../../../assets/examples/menu/icon-menu';
import { NestedMenuExample } from './../../../../assets/examples/menu/nested-menu';
import { SharedComponent } from './../../../shared/shared.docs';
import { CodeFiles, CodeExternalComponent } from './../../../shared/example-viewer.docs';
import { Component, OnInit } from "@angular/core";

@Component({
	selector: 'docs-menu-example',
	templateUrl: './examplemenu.component.html'
})
export class DocsExampleMenu implements OnInit {
	nestedMenu: CodeFiles;
	iconMenu: CodeFiles;
	iconMenuExt: CodeExternalComponent[];
	constructor(private shared: SharedComponent) { shared.setTitle("Docs > Menu > Examples") }
	ngOnInit() {
		this.iconMenuExt = [
			{
				link: "/components/dialog",
				name: "Dialog"
			}
		]
		this.nestedMenu = {
			filePath: [
				'assets/examples/menu/nested-menu.html',
				'assets/examples/menu/nested-menu.ts'
			],
			highlightPath: [
				'assets/highlighted/nested-menu-html.html',
				'assets/highlighted/nested-menu-ts.html'
			],
			componentName: NestedMenuExample,
			url: "menu/menu-nested",
			title: "Nested menu",
			notices: [
				{ name: "≥ Version 2.0.0-beta.10", desc: "This means that this functionality is only available in versions 2.0.0-beta.10 and newer.", icon: "warning" }
			]
		}
		this.iconMenu = {
			filePath: [
				'assets/examples/menu/icon-menu.html',
				'assets/examples/menu/icon-menu.ts',
				'assets/examples/menu/icon-menu-dialog.html'
			],
			highlightPath: [
				'assets/highlighted/icon-menu-html.html',
				'assets/highlighted/icon-menu-ts.html',
				'assets/highlighted/icon-menu-dialog-html.html'
			],
			componentName: IconMenuExample,
			url: "menu/menu-icon",
			title: "Icon menu"
		}
	}
}