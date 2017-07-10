import { SharedComponent } from './../../shared/shared';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'docs-showcase',
    templateUrl: './showcase.component.html'
})
export class DocsShowcase implements OnInit{
    showcases: Showcase[];
    constructor(private shared: SharedComponent){shared.setTitle('Docs > Showcases');}
    ngOnInit() {
        this.showcases = [
            {
                title: 'Material Docs',
                desc: 'The official Material Docs from Angular.',
                link: 'https://material.angular.io',
                imgSrc: 'assets/img/showcases/material.angular.io docs.jpg',
            },
            {
                title: 'ng-conf 2016 - Puppy Love demo',
                desc: 'The demo from ng-conf 2016. Note that this demo uses an alpha version of angular material.',
                imgSrc: 'assets/img/showcases/puppy-love demo.jpg',
                link: 'https://puppy-love.firebaseapp.com',
                relatedUrl: 'https://www.youtube.com/watch?v=rRiV_b3WsoY',
                relatedType: 'YouTube'
            },
            {
                title: 'material2-app - Demo',
                desc: 'Material2 Example app. Note that this demo uses an alpha version of angular material.',
                imgSrc: 'assets/img/showcases/material2-app demo.jpg',
                link: 'https://material2-app.firebaseapp.com'
            }
        ]
    }
}

interface Showcase {
    title: string;
    desc: string;
    link: string;
    imgSrc?: string;
    relatedUrl?: string;
    relatedType?: "YouTube" | "Other" | string;
}