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
		items: [
			{ id: 'autocomplete', name: 'Autocomplete' },
			{ id: 'checkbox', name: 'Checkbox' },
			{ id: 'datepicker', name: 'Datepicker' },
			{ id: 'input', name: 'Input' },
			{ id: 'radio', name: 'Radio button' },
			{ id: 'select', name: 'Select' },
			{ id: 'slider', name: 'Slider' },
			{ id: 'slide-toggle', name: 'Slide toggle' },
		]
	},
	{
		id: 'nav',
		name: 'Navigation',
		items: [
			{ id: 'menu', name: 'Menu' },
			{ id: 'sidenav', name: 'Sidenav' },
			{ id: 'toolbar', name: 'Toolbar' },
		]
	},
	{
		id: 'layout',
		name: 'Layout',
		items: [
			{ id: 'list', name: 'List' },
			{ id: 'grid-list', name: 'Grid list' },
			{ id: 'card', name: 'Card' },
			{ id: 'tabs', name: 'Tabs' },
			{ id: 'expansion-panel', name: 'Expansion Panel' },
			{ id: 'stepper', name: 'Stepper' }
		]
	},
	{
		id: 'buttons',
		name: 'Buttons, Indicators & Icons',
		items: [
			{ id: 'button', name: 'Button' },
			{ id: 'button-toggle', name: 'Button toggle' },
			{ id: 'chips', name: 'Chips' },
			{ id: 'icon', name: 'Icon' },
			{ id: 'progress-spinner', name: 'Progress spinner' },
			{ id: 'progress-bar', name: 'Progress bar' },
		]
	},
	{
		id: 'modals',
		name: 'Popups & Modals',
		items: [
			{ id: 'dialog', name: 'Dialog' },
			{ id: 'tooltip', name: 'Tooltip' },
			{ id: 'snack-bar', name: 'Snackbar' }
		]
	},
	{
		id: 'tables',
		name: 'Data table',
		items: [
			{ id: 'table', name: 'Table' },
			{ id: 'sort', name: 'Sort header' },
			{ id: 'paginator', name: 'Paginator' }
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
