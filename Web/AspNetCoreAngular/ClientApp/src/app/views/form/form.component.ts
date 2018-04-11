import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { OptionModel } from "../../shared/models/option.model";
import { FormChildModel } from "./form.child.model";
import { FormModel } from "./form.model";

@Component({ selector: "app-form", templateUrl: "./form.component.html" })
export class FormComponent {
	public disabled: boolean = false;
	public model: FormModel;
	public options: OptionModel[];
	public reactiveForm: FormGroup;

	constructor(private readonly formBuilder: FormBuilder) {
		this.createOptions();
		this.createModel();
		this.createReactiveForm();
	}

	public createOptions() {
		this.options = new Array<OptionModel>();

		for (let i = 1; i <= 10; i++) {
			this.options.push(new OptionModel(`Option ${i}`, i));
		}
	}

	public createModel() {
		this.model = new FormModel();
		this.model.child = new FormChildModel();
	}

	public createReactiveForm() {
		this.reactiveForm = this.formBuilder.group({
			child: this.formBuilder.group({ string: [] }),
			number: [],
			string: []
		});
	}

	public templateFormSubmit(form: any) { }

	public templateFormSearch() { }

	public reactiveFormSubmit(form: any) { }

	public reactiveFormsSearch() { }
}
