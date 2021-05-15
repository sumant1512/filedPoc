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
  isUserAlreadyRegistered: boolean;
  selectedCountryCode: number;
  userList: string[];

  subscription: Subscription = new Subscription();

  constructor(private userFacade: UserFacade, private router: Router) {
    this.startForm = startForm();
    this.contactForm = contactForm();
  }

  ngOnInit(): void {
    this.getEmailList();
  }

  get f() {
    return this.contactForm.controls;
  }

  checkEmail(event): void {
    this.isUserAlreadyRegistered = this.userList?.includes(event);
  }

  getEmailList(): void {
    this.userFacade.getEmailList.subscribe((emailList) => {
      this.userList = emailList;
    });
  }

  letsStart(): void {
    const currentUserDetails = {
      ...this.startForm.value,
      monthlyBudget: parseInt(this.startForm.value.monthlyBudget),
      isPaymentDone: false,
    };
    this.userFacade.setCurrentUser(currentUserDetails);
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
    const contactDetails = {
      ...this.contactForm.value,
      phone: parseInt(this.contactForm.value.phone),
    };
    this.userFacade.setUserInUserList(contactDetails);
    this.contactForm.reset();
    this.startForm.reset();
    this.isContactFormActive = false;
    this.router.navigateByUrl("users");
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
