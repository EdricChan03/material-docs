import { SharedComponent } from './../../shared/shared.docs';
import { Component } from "@angular/core";

@Component({
	selector: 'docs-examples',
	templateUrl: './example.docs.html'
})
export class DocsExamples {
	loremipsum: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet quis eros ut volutpat. Donec vitae nisl gravida, rutrum mi ut, feugiat ligula. Nulla nec lectus eget dui molestie pulvinar id tincidunt nisi. Morbi lobortis massa sit amet magna efficitur, a dignissim est dignissim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur ultrices faucibus orci ut hendrerit. Proin at lorem nec ligula interdum pharetra. Fusce vel dolor ac urna dapibus mollis. Integer posuere a nunc vel consectetur. Pellentesque sollicitudin neque feugiat arcu sollicitudin faucibus. Aenean ac sodales dui, sollicitudin feugiat nunc.";
	startDate: Date = new Date(1997, 0, 1);
	touchUi: boolean = false;
	favouriteFood: string = "steak";
	favouriteHobbies: string[] = ["teacher", "computer"];
	gender: string = "male";
	constructor(private shared: SharedComponent){shared.setTitle("Docs > Examples")}
}