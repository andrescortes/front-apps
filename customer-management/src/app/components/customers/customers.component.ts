import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {CustomerModel} from "../../model/customer.model";
import {NgForm} from "@angular/forms";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: CustomerModel[] = [];
  customer: CustomerModel = {
    name: '',
    lastname: '',
    email: '',
    balance: 0
  }
  @ViewChild('customerForm') customerForm: NgForm;
  @ViewChild('closeButton') closeButton: ElementRef;

  constructor(
    private customerService: CustomerService,
    private flashMessage: FlashMessagesService
  ) {
  }

  ngOnInit(): void {
    this.customerService.getCustomers()
    .subscribe({
      next: (customers) => {
        /*console.log("Customers from server");
        customers.forEach(customer => {
          console.table(customer);
        })*/
        this.customers = customers;
      }
    })
  }

  getTotalBalance(): number {
    let totalBalance = 0;
    if (this.customers) {
      this.customers.forEach((customer: any) => {
        totalBalance += customer.balance;
      });
    }
    return totalBalance;
  }

  addCustomerForm({value, valid}: NgForm /*{ value: CustomerModel, valid: boolean }*/) {
    if (!valid) {
      console.log("Form is not valid");
      this.flashMessage.show('Please fill out the form correctly', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    } else {
      //add new customer
      this.customerService.addCustomer(value);
      this.customerForm.resetForm();
      this.closeModal();
    }
  }

  private closeModal() {
    this.closeButton.nativeElement.click();
  }
}

