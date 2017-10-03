import { APIProperties, APIMethods } from './shared.docs';
import { Input, Component, OnInit } from "@angular/core";

@Component({
    selector: 'api-method-viewer',
    templateUrl: './api-method-viewer.docs.html'
})
export class APIMethodViewerComponent {
	/**
	 * The properties of a certain API methods
	 */
    @Input() apiFiles: APIMethods[];
}

@Component({
    selector: 'api-property-viewer',
    templateUrl: './api-property-viewer.docs.html'
})
export class APIPropertyViewerComponent{
	/**
	 * The properties of a certain API properties
	 */
    @Input() apiFiles: APIProperties[];
}