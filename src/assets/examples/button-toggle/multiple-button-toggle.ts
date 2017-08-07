import { Component } from "@angular/core";

@Component({
    selector: 'multiple-button-toggle-example',
    templateUrl: 'multiple-button-toggle.html'
})
export class MultipleButtonToggleComponent {
	multipleOpt: boolean = false;
	toggles = [
		{
			value: "left",
			icon: "format_align_left"
		},
		{
			value: "right",
			icon: "format_align_right"
		},
		{
			value: "center",
			icon: "format_align_center"
		},
		{
			value: "justify",
			icon: "format_align_justify"
		}
	]
}