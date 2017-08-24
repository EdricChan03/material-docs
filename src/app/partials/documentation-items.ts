import { Injectable } from '@angular/core';

/**
 * A doc item from a {@link DocCategory}
 */
export interface DocItem {
	/**
	 * The id of the item
	 */
	id: string;
	/**
	 * The name of the item
	 */
	name: string;
	/**
	 * All examples from the item
	 */
	examples?: string[];
}
/**
 * The array for a doc category such as `modals` etc.
 */
export interface DocCategory {
	/**
	 * The id of the category
	 */
	id: string;
	/**
	 * The name of the category
	 */
	name: string;
	/**
	 * The items of the category
	 */
	items: DocItem[];
}

/**
 * The array for all components
 */
const DOCS = [
	{
		id: 'forms',
		name: 'Form Controls',
		summary: 'Radio buttons, checkboxes, input fields, sliders, slide toggles, selects',
		items: [
			{ id: 'autocomplete', name: 'Autocomplete', examples: ['autocomplete-overview'] },
			{ id: 'checkbox', name: 'Checkbox', examples: ['checkbox-configurable'] },
			{ id: 'datepicker', name: 'Datepicker', examples: ['datepicker-overview'] },
			{ id: 'input', name: 'Input', examples: ['input-form'] },
			{ id: 'radio', name: 'Radio button', examples: ['radio-ng-model'] },
			{ id: 'select', name: 'Select', examples: ['select-form'] },
			{ id: 'slider', name: 'Slider', examples: ['slider-configurable'] },
			{ id: 'slide-toggle', name: 'Slide toggle', examples: ['slide-toggle-configurable'] },
		]
	},
	{
		id: 'nav',
		name: 'Navigation',
		summary: 'Sidenavs, toolbars, menus',
		items: [
			{ id: 'menu', name: 'Menu', examples: ['menu-icons'] },
			{ id: 'sidenav', name: 'Sidenav', examples: ['sidenav-fab'] },
			{ id: 'toolbar', name: 'Toolbar', examples: ['toolbar-multirow'] },
		]
	},
	{
		id: 'layout',
		name: 'Layout',
		summary: 'Lists, grid-lists, cards',
		items: [
			{ id: 'list', name: 'List', examples: ['list-sections'] },
			{ id: 'grid-list', name: 'Grid list', examples: ['grid-list-dynamic'] },
			{ id: 'card', name: 'Card', examples: ['card-fancy'] },
			{ id: 'tabs', name: 'Tabs', examples: ['tabs-template-label'] },
		]
	},
	{
		id: 'buttons',
		name: 'Buttons, Indicators & Icons',
		summary: 'Buttons, button toggles, icons, progress spinners, progress bars',
		items: [
			{ id: 'button', name: 'Button', examples: ['button-types'] },
			{ id: 'button-toggle', name: 'Button toggle', examples: ['button-toggle-exclusive'] },
			{ id: 'chips', name: 'Chips', examples: ['chips-stacked'] },
			{ id: 'icon', name: 'Icon', examples: ['icon-svg'] },
			{
				id: 'progress-spinner', name: 'Progress spinner',
				examples: ['progress-spinner-configurable']
			},
			{ id: 'progress-bar', name: 'Progress bar', examples: ['progress-bar-configurable'] },
		]
	},
	{
		id: 'modals',
		name: 'Popups & Modals',
		summary: 'Dialogs, tooltips, snackbars',
		items: [
			{ id: 'dialog', name: 'Dialog', examples: ['dialog-result'] },
			{ id: 'tooltip', name: 'Tooltip', examples: ['tooltip-position'] },
			{ id: 'snack-bar', name: 'Snackbar', examples: ['snack-bar-component'] },
		]
	},
	{
		id: 'tables',
		name: 'Data table',
		summary: 'Tables, sorting, and pagination',
		items: [
			{
				id: 'table', name: 'Table',
				examples: ['table-filtering', 'table-pagination', 'table-sorting']
			},
			{ id: 'sort', name: 'Sort header', examples: ['sort-overview'] },
			{ id: 'paginator', name: 'Paginator', examples: ['paginator-configurable'] },
		]
	}
];
/**
 * All items (id, name and examples)
 */
const ALL_ITEMS = DOCS.reduce((result, category) => result.concat(category.items), []);

@Injectable()
export class DocumentationItems {
	/**
	 * Get items in categories
	 * @return {DocCategory[]}
	 */
	getItemsInCategories(): DocCategory[] {
		return DOCS;
	}
	/**
	 * Gets all items
	 * @return {DocItem[]}
	 */
	getAllItems(): DocItem[] {
		return ALL_ITEMS;
	}
	/**
	 * Gets an item by its ID
	 * @param {string} id The id of the item to get
	 * @return {DocItem}
	 */
	getItemById(id: string): DocItem {
		return ALL_ITEMS.find(i => i.id === id);
	}
	/**
	 * Gets a category by its ID
	 * @param {string} id The id of the category to get
	 * @return {DocCategory}
	 */
	getCategoryById(id: string): DocCategory {
		return DOCS.find(c => c.id == id);
	}
}
