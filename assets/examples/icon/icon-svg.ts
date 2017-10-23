import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Component } from '@angular/core';

@Component({
	selector: 'icon-svg-example',
	templateUrl: 'icon-svg.html'
})
export class IconSVGExample {
	constructor(dom: DomSanitizer, iconReg: MatIconRegistry) {
		iconReg.addSvgIcon('menu', dom.bypassSecurityTrustUrl('icon-menu.svg'));
	}
}