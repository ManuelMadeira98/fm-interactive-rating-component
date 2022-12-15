import { Component } from '@angular/core';

interface RatingButton {
	label: string;
	selected: boolean;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	buttons: RatingButton[] = [
		{ label: '1', selected: false },
		{ label: '2', selected: false },
		{ label: '3', selected: false },
		{ label: '4', selected: false },
		{ label: '5', selected: false },
	];

	onRatingButtonClick(button: RatingButton) {
		// Set the selected state of all buttons to false
		this.buttons.forEach((button) => (button.selected = false));

		// Set the selected state of the clicked button to true
		button.selected = true;
	}
}
