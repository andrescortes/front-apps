import {CanActivate, Router} from "@angular/router";
import {ConfigurationService} from "../service/configuration.service";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class ConfigurationGuard implements CanActivate {

  constructor(
    private configurationService: ConfigurationService,
    private router: Router
  ) {
  }

  canActivate(): Observable<boolean> {
    return this.configurationService.getConfiguration()
    .pipe(
      map((configuration) => {
        if (configuration.allowRegister) {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
      })
    )
  }

}


