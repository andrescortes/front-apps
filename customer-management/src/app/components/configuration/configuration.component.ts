import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ConfigurationService} from "../../service/configuration.service";
import {ConfigurationModel} from "../../model/configuration.model";

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {
  allowRegister: boolean | undefined = false;

  constructor(
    private router: Router,
    private configurationService: ConfigurationService
  ) {
  }

  ngOnInit(): void {
    this.configurationService.getConfiguration().subscribe({
      next: (configuration: ConfigurationModel) => {
        this.allowRegister = configuration.allowRegister;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  save() {
    let configuration: ConfigurationModel = {
      allowRegister: this.allowRegister
    };
    this.configurationService.updateConfiguration(configuration);
    this.router.navigate(['/']);
  }
}
