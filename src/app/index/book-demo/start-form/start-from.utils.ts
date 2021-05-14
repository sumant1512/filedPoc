import { FormGroup, FormControl, Validators } from "@angular/forms";

export function startForm() {
  return new FormGroup({
    adsConvert: new FormControl("yes", [Validators.required]),
    monthlyBudget: new FormControl("", [Validators.required]),
  });
}
