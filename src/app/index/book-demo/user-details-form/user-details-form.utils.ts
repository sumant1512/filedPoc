import { FormGroup, FormControl, Validators } from "@angular/forms";

export function startForm() {
  return new FormGroup({
    adsConvert: new FormControl("yes", [Validators.required]),
    monthlyBudget: new FormControl("", [Validators.required]),
  });
}

export function contactForm() {
  return new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    monthlyAdBudget: new FormControl("", [Validators.required]),
    countrycode: new FormControl("", [Validators.required]),
    phone: new FormControl("", [Validators.required]),
  });
}
