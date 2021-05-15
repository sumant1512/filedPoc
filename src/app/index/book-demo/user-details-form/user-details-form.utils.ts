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
    email: new FormControl("", [
      Validators.required,
      Validators.pattern(
        "^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$"
      ),
    ]),
    monthlyAdBudget: new FormControl("", [Validators.required]),
    countrycode: new FormControl("+91", [Validators.required]),
    phone: new FormControl("", [
      Validators.required,
      Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
    ]),
  });
}
