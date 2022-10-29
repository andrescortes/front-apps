import {Injectable} from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/compat/firestore";
import {CustomerModel} from "../model/customer.model";
import {Observable} from "rxjs";

import {map} from "rxjs/operators";

@Injectable()
export class CustomerService {
  customersCollection: AngularFirestoreCollection<CustomerModel>;
  customerDoc: AngularFirestoreDocument<CustomerModel>;
  customers: Observable<CustomerModel[]>
  customer: any;

  constructor(private db: AngularFirestore) {
    this.customersCollection = this.db.collection(
      'customer',
      ref => ref.orderBy('name', 'asc'));
  }

  getCustomers(): Observable<CustomerModel[]> {
    this.customers = this.customersCollection.snapshotChanges()
    .pipe(
      map(changes => {
        return changes.map((action) => {
          const data = action.payload.doc.data() as CustomerModel;
          data.id = action.payload.doc.id;
          return data;
        })
      })
    );
    return this.customers;
  }

  addCustomer(value: CustomerModel) {
    this.customersCollection.add(value)
    .then(() => {
      console.log("Customer added");
    })
    .catch(err => {
      console.log("Error adding customer");
      console.log(err);
    })
  }

  getCustomer(id: string) {
    this.customerDoc = this.db.doc<CustomerModel>(`customer/${id}`);
    this.customer = this.customerDoc.snapshotChanges()
    .pipe(
      map(action => {
        if (!action.payload.exists) {
          return null;
        } else {
          const data = action.payload.data() as CustomerModel;
          data.id = action.payload.id;
          return data;
        }
      }));
    return this.customer;
  }

  updateCustomer(value: CustomerModel) {
    this.customerDoc = this.db.doc(`customer/${value.id}`);
    this.customerDoc.update(value)
    .then(() => {
      console.log("Customer updated");
    }).catch(err => {
      console.log("Error updating customer");
      console.log(err);
    })
  }

  deleteCustomer(id: string): void {
    this.customerDoc = this.db.doc(`customer/${id}`);
    this.customerDoc.delete()
    .then(() => {
      console.log("Customer deleted");
    }).catch(err => {
      console.log("Error deleting customer");
      console.log(err);
    })
  }
}
