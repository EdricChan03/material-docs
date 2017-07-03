import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'code-viewer',
    templateUrl: './code-viewer.component.html'
})

export class CodeViewerComponent implements OnInit {
    @Input() title: string;
    constructor() { }
    code: string;
    ngOnInit() { }
}