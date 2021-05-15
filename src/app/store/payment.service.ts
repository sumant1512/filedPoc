import { Injectable } from "@angular/core";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { ToasterComponent } from "../toaster/toaster.component";
import { UserFacade } from "./user/user.facade";

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  horizontalPosition: MatSnackBarHorizontalPosition = "end";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  handler: any = null;
  status: boolean;

  constructor(private userFacade: UserFacade, private _snackBar: MatSnackBar) {}

  payAmountForAds(amount: number, email: string) {
    var handler = (<any>window).StripeCheckout.configure({
      key: "pk_test_51Ir7LOSBEzlXwWbZKaYP21A6WQji2pmQpLBAU1fxRiTN2LMMD89xihR4AojiEUHi4coeqpJhF3yzWqkdtpOJCOeK00hvze8aya",
      locale: "auto",
      token: (token: any) => {
        if (token) {
          this.successMessage(email);
        }
      },
    });

    handler.open({
      name: "Mock payment Gateway",
      description: "Client Side Only",
      amount: amount * 100,
    });
  }

  successMessage(email): void {
    this.userFacade.setPaymentStatus({
      email: email,
      isPaymentDone: true,
    });
    this._snackBar.openFromComponent(ToasterComponent, {
      data: {
        message: "Payment Successfull!!!",
      },
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 5000,
    });
  }

  loadStripePaymentGateway(): void {
    if (!window.document.getElementById("stripe-script")) {
      var server = window.document.createElement("script");
      server.id = "stripe-script";
      server.type = "text/javascript";
      server.src = "https://checkout.stripe.com/checkout.js";
      server.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: "pk_test_51Ir7LOSBEzlXwWbZKaYP21A6WQji2pmQpLBAU1fxRiTN2LMMD89xihR4AojiEUHi4coeqpJhF3yzWqkdtpOJCOeK00hvze8aya",
          locale: "auto",
          token: function (token: any) {
            alert("Payment Success!!");
          },
        });
      };

      window.document.body.appendChild(server);
    }
  }
}
