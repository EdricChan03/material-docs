import { Component } from "@angular/core";

@Component({
    selector: 'exclusive-button-toggle-example',
    templateUrl: 'exclusive-button-toggle.html'
})
export class ExclusiveButtonToggleExample {
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