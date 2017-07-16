import { Component } from '@angular/core';
@Component({
    selector: 'nav-list-example',
    templateUrl: 'nav-list.html'
})
export class NavListComponent {
    links: any = [
        {url: 'https://google.com', desc: 'Google'},
        {url: 'https://material.angular.io', desc: 'Material.Angular.io'},
        {url: 'https://github.com', desc: 'Github'}
    ]
}