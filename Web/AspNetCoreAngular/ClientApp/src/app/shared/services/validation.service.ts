import { Injectable } from "@angular/core";

@Injectable()
export class ValidationService {
	public date = /^((((0?[1-9]|[12]\d|3[01])[\.\-\/](0?[13578]|1[02])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|[12]\d|30)[\.\-\/](0?[13456789]|1[012])[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|((0?[1-9]|1\d|2[0-8])[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?\d{2}))|(29[\.\-\/]0?2[\.\-\/]((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))|(((0[1-9]|[12]\d|3[01])(0[13578]|1[02])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|[12]\d|30)(0[13456789]|1[012])((1[6-9]|[2-9]\d)?\d{2}))|((0[1-9]|1\d|2[0-8])02((1[6-9]|[2-9]\d)?\d{2}))|(2902((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)))) ?((20|21|22|23|[01]\d|\d)(([:.][0-5]\d){1,2}))?$/;
	public decimal = /^((-?[1-9]+)|[0-9]+)(\.?|\,?)([0-9]*)$/;
	public email = /^([a-z0-9_\.\-]{3,})@([\da-z\.\-]{3,})\.([a-z\.]{2,6})$/;
	public hex = /^#?([a-f0-9]{6}|[a-f0-9]{3})$/;
	public integer = /^-?[0-9]+$/;
	public zeros = /^0+$/;
	public time = /^(20|21|22|23|[01]\d|\d)(([:.][0-5]\d){1,2})$/;
	public url = /^(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})$/;

	public isDate(value: any) { return this.date.test(value); }
	public isDecimal(value: any) { return this.decimal.test(value); }
	public isEmail(value: any) { return this.email.test(value); }
	public isEmpty(value: any) { return !value || value.toString().trim() === ""; }
	public isHex(value: any) { return this.hex.test(value); }
	public isInteger(value: any) { return this.integer.test(value); }
	public isMax(value: any, max: string) { return (!value || !max) || (value && max && parseFloat(value) <= parseFloat(max)); }
	public isMin(value: any, min: string) { return (!value || !min) || (value && min && parseFloat(value) >= parseFloat(min)); }
	public isOnlyZeros(value: any) { return this.zeros.test(value); }
	public isTime(value: any) { return this.time.test(value); }
	public isUrl(value: any) { return this.url.test(value); }
}
