import { Component, Input, OnInit } from "@angular/core";
import { PaymentService } from "src/app/store/payment.service";
import { UserDetailsType } from "src/app/store/user/types/user.type";

@Component({
  selector: "app-user-card",
  templateUrl: "./user-card.component.html",
  styleUrls: ["./user-card.component.scss"],
})
export class UserCardComponent implements OnInit {
  @Input() userDetail: UserDetailsType;

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {
    this.paymentService.loadStripePaymentGateway();
  }

  payAmountForAds(amount: number, email: string): void {
    this.paymentService.payAmountForAds(amount, email);
  }
}
