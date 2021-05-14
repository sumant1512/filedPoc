import { Component, Input, OnInit } from "@angular/core";
import { UserDetailsType } from "src/app/store/user/types/user.type";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
})
export class UserCardComponent implements OnInit {
  @Input() userDetail: UserDetailsType;
  handler: any = null;

  constructor() {}

  ngOnInit(): void {
    this.loadStripePaymentGateway();
  }

  payAmountForAds(amount: any): void {
    var handler = (<any>window).StripeCheckout.configure({
      key: "pk_test_51Ir7LOSBEzlXwWbZKaYP21A6WQji2pmQpLBAU1fxRiTN2LMMD89xihR4AojiEUHi4coeqpJhF3yzWqkdtpOJCOeK00hvze8aya",
      locale: "auto",
      token: function (token: any) {
        alert("Token Created!!");
      },
    });

    handler.open({
      name: "Mock payment Gateway",
      description: "Client Side Only",
      amount: amount * 100,
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
