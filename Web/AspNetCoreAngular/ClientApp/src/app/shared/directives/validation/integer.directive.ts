import { Directive, ElementRef, EventEmitter, Output } from "@angular/core";

import CleaveInteger = require("cleave.js");

@Directive({ selector: "[integer]", host: { "(input)": "onInput($event)" } })
export class IntegerDirective {
	public cleaveInteger: any;

	@Output() public ngModelChange = new EventEmitter();

	constructor(private el: ElementRef) {
		if (!el.nativeElement.classList.contains(el.nativeElement.name)) {
			el.nativeElement.classList.add(el.nativeElement.name);
		}

		this.onInit();
	}

	public onInit() {
		setTimeout((x) => {
			this.cleaveInteger = new CleaveInteger(`.${this.el.nativeElement.name}`, {
				blocks: [20],
				numericOnly: true
			});
		}, 0);
	}

	public onInput($event: KeyboardEvent) {
		this.cleaveInteger.onChange();
		this.ngModelChange.emit(($event.target as HTMLInputElement).value);
	}
}
