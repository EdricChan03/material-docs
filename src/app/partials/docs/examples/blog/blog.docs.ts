import { Component } from '@angular/core';

@Component({
	selector: 'docs-example-blog',
	templateUrl: './blog.docs.html'
})
export class DocsExampleBlog {
	nav = [
		{
			url: "latest",
			title: "Latest blogpost"
		},
		{
			url: "blogpost-url-1",
			title: "My blogpost"
		}
	]
}