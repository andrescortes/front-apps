import {Component, OnInit} from '@angular/core';
import {CustomerModel} from "../../model/customer.model";
import {CustomerService} from "../../service/customer.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customers: CustomerModel | undefined;
  customer: CustomerModel = {
    name: '',
    lastname: '',
    email: '',
    balance: 0
  }
  id: string;

  constructor(
    private customerService: CustomerService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.customerService.getCustomer(this.id)
    .subscribe({
      next: (customer: any) => {
        this.customer = customer;
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log("Customer loaded");
      }
    });
  }

  saveCustomerForm({value, valid}: NgForm) {
    if (!valid) {
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    } else {
      // Add id to customer
      value.id = this.id;
      this.customerService.updateCustomer(value);
      this.router.navigate(['/']);
    }
  }

  deleteCustomer() {
    if(confirm('Are you sure you want to delete this customer?')) {
      this.customerService.deleteCustomer(this.id);
      this.router.navigate(['/']);
    }

  }
}
