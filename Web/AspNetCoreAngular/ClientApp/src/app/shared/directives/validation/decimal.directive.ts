import { Directive, ElementRef, EventEmitter, Output } from "@angular/core";

import CleaveDecimal = require("cleave.js");

@Directive({ selector: "[decimal]", host: { "(input)": "onInput($event)" } })
export class DecimalDirective {
	public cleaveDecimal: any;

	@Output() public ngModelChange = new EventEmitter();

	constructor(private el: ElementRef) {
		if (!el.nativeElement.classList.contains(el.nativeElement.name)) {
			el.nativeElement.classList.add(el.nativeElement.name);
		}

		this.onInit();
	}

	public onInit() {
		setTimeout((x) => {
			this.cleaveDecimal = new CleaveDecimal(`.${this.el.nativeElement.name}`, {
				delimiter: ".",
				numeral: true,
				numeralDecimalMark: ",",
				numeralDecimalScale: 2,
				numeralIntegerScale: 20,
			});
		}, 0);
	}

	public onInput($event: KeyboardEvent) {
		this.cleaveDecimal.onChange();
		this.ngModelChange.emit(($event.target as HTMLInputElement).value);
	}
}
