import { SharedComponent } from './../shared/shared';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'search-docs',
    templateUrl: './search.component.html'
})

export class DocsSearch implements OnInit {
    constructor(private shared: SharedComponent) { }
    filteredItems: any;
    items = [] = ['WOW', 'test', 'loL', 'something'];
    ngOnInit() {
        this.shared.setTitle('Docs > Search');
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