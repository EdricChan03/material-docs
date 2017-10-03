import { DocumentationItems } from './documentation-items';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedComponent } from './../shared/shared.docs';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'search-docs',
    templateUrl: './search.docs.html'
})

export class DocsSearch {
    constructor(private shared: SharedComponent, private route: ActivatedRoute, private router: Router, private docItems: DocumentationItems) {
		this.route.params.subscribe(params=> {
			if (params['name']) {
				this.searchDocs(params['name']);
			}
		})
		shared.setTitle("Docs > Search");

	}
    filteredItems: any;
    items = [] = ['WOW', 'test', 'loL', 'something'];
    search: string;
    searchOptType: string[] = ["component", "guides", "showcase", "misc", "other"];
    isCaseSensitive: boolean;
	searchDocs(search?: string) {
		this.search = search;
		if (search) console.log(search);
		console.log(this.docItems.getCategoryById(this.search));
	}
    submit(search?: string) {
        console.log(`Searching for ${this.search} with params ${this.searchOptType}`);
        if (this.isCaseSensitive) {
            console.log("Search is case sensitive");
        } else {
            console.log("Search is not case sensitive");
        }
    }
    reset() {
        if (confirm("Are you sure you want to reset?")) {
            this.search = "";
            this.searchOptType = ["component", "guides", "showcase", "misc", "other"];
            this.isCaseSensitive = false;
        }
    }
    // submit(search: string) {
    //     console.log(search);
    //     this.filterItem(search);
    // }
    // filterItem(value) {
    //     this.filteredItems = this.returnFilterItems(value);
    //     console.log(this.filteredItems);
    // }
    // returnFilterItems(value): any {
    //     let temp = [];
    //     for (var i = 0; i < this.items.length; i++) {
    //         if (this.items[i].indexOf(value) > -1 && !value) {
    //             console.log(this.items[i]);
    //             temp.push(this.items[i]);
    //             return temp;
    //         }
    //     }
    // }
}