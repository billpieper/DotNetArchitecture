import { Directive, ElementRef, EventEmitter, Output } from "@angular/core";

import CleaveDate = require("cleave.js");

@Directive({ selector: "[date]", host: { "(input)": "onInput($event)" } })
export class DateDirective {
	public cleaveDate: any;

	@Output() public ngModelChange = new EventEmitter();

	constructor(private el: ElementRef) {
		if (!el.nativeElement.classList.contains(el.nativeElement.name)) {
			el.nativeElement.classList.add(el.nativeElement.name);
		}

		this.onInit();
	}

	public onInit() {
		setTimeout((x) => {
			this.cleaveDate = new CleaveDate(`.${this.el.nativeElement.name}`, {
				date: true,
				datePattern: ["d", "m", "Y"]
			});
		}, 0);
	}

	public onInput($event: KeyboardEvent) {
		this.cleaveDate.onChange();
		this.ngModelChange.emit(($event.target as HTMLInputElement).value);
	}
}
