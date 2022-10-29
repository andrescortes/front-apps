import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {ConfigurationModel} from "../model/configuration.model";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class ConfigurationService {
  configurationDoc: AngularFirestoreDocument<ConfigurationModel>;
  configuration: any;
  //id unique for each configuration collection in firebase database
  id: string = 'WK8wmbVGVFenlwTD21Xc';

  constructor(private db: AngularFirestore) {
  }

  getConfiguration(): Observable<ConfigurationModel> {
    this.configurationDoc = this.db.doc<ConfigurationModel>(`configuration/${this.id}`);
    this.configuration = this.configurationDoc.valueChanges();
    return this.configuration;
  }

  updateConfiguration(configuration: ConfigurationModel) {
    this.configurationDoc = this.db.doc<ConfigurationModel>(`configuration/${this.id}`);
    this.configurationDoc.update(configuration);
  }


}
