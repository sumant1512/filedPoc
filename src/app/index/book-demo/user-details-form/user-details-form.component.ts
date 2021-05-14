import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { UserFacade } from "src/app/store/user/user.facade";
import { StartFormLabels } from "./user-details-form.constants";
import { contactForm, startForm } from "./user-details-form.utils";
@Component({
  selector: "app-user-details-form",
  templateUrl: "./user-details-form.component.html",
  styleUrls: ["./user-details-form.component.scss"],
})
export class UserDetailsFormComponent implements OnInit, OnDestroy {
  startForm: FormGroup;
  contactForm: FormGroup;
  LABELS = StartFormLabels;
  isContactFormActive: boolean;
  selectedCountryCode: number;

  subscription: Subscription = new Subscription();

  constructor(private userFacade: UserFacade, private router: Router) {
    this.startForm = startForm();
    this.contactForm = contactForm();
  }

  ngOnInit(): void {}

  get f() {
    return this.startForm.controls;
  }

  letsStart(): void {
    this.userFacade.setCurrentUser(this.startForm.value);
    this.isContactFormActive = true;
    this.getCurrentUserDetails();
  }

  getCurrentUserDetails(): void {
    this.subscription.add(
      this.userFacade.getCurrentUser.subscribe((userDetails) => {
        if (userDetails) {
          this.contactForm.patchValue({
            monthlyAdBudget: userDetails?.monthlyBudget,
          });
        }
      })
    );
  }

  selectedCounty(countyCode: number): void {
    this.selectedCountryCode = countyCode;
  }

  letsContact(): void {
    this.userFacade.setUserInUserList(this.contactForm.value);
    this.contactForm.reset();
    this.startForm.reset();
    this.isContactFormActive = false;
    this.router.navigateByUrl("users");
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
