import { Directive, ElementRef, EventEmitter, Output } from "@angular/core";

import CleaveCurrency = require("cleave.js");

@Directive({ selector: "[currency]", host: { "(input)": "onInput($event)" } })
export class CurrencyDirective {
	public cleaveCurrency: any;

	@Output() public ngModelChange = new EventEmitter();

	constructor(private el: ElementRef) {
		if (!el.nativeElement.classList.contains(el.nativeElement.name)) {
			el.nativeElement.classList.add(el.nativeElement.name);
		}

		this.onInit();
	}

	public onInit() {
		setTimeout((x) => {
			this.cleaveCurrency = new CleaveCurrency(`.${this.el.nativeElement.name}`, {
				delimiter: ".",
				numeral: true,
				numeralDecimalMark: ",",
				numeralDecimalScale: 2,
				numeralIntegerScale: 20,
				prefix: "R$ ",
			});
		}, 0);
	}

	public onInput($event: KeyboardEvent) {
		this.cleaveCurrency.onChange();
		this.ngModelChange.emit(($event.target as HTMLInputElement).value);
	}
}
