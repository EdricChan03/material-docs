import { APIProperties, APIMethods } from './shared';
import { Input, Component, OnInit } from "@angular/core";

@Component({
    selector: 'api-method-viewer',
    templateUrl: './api-method-viewer.component.html'
})
export class APIMethodViewerComponent {
    @Input() apiFiles: APIMethods[];
}

@Component({
    selector: 'api-property-viewer',
    templateUrl: './api-property-viewer.component.html'
})
export class APIPropertyViewerComponent{
    @Input() apiFiles: APIProperties[];
}