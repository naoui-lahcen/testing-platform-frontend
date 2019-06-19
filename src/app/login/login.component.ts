import {Component, Inject, OnInit} from '@angular/core';
import {Mode} from '../core/models/mode.enum';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../core/services/security/auth.service';
import {ValidationService} from '../core/services/validation/validation.service';

import {TranslateService} from '@ngx-translate/core';
import {UIFormComponent} from '../shared/components/ui-elements/ui-form';
import {environment} from 'environments/environment';

import {FormBuilder, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import 'rxjs/Rx';

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})
export class LoginComponent extends UIFormComponent implements OnInit {
   loading = false;
   username: string = environment.apiConfig.credentials.clientId;
   password: string = environment.apiConfig.credentials.clientSecret;
   mode = Mode.EDIT;
   userForm: FormGroup;

   constructor(private route: ActivatedRoute,
               private router: Router,
               private translate: TranslateService,
               private toastrService: ToastrService,
               @Inject('AuthService') private authService: AuthService,
               validation: ValidationService,
               fb: FormBuilder) {
      super(validation);
      this.userForm = fb.group({
         username: '',
         password: ''
      });
   }

   ngOnInit() {
      // reset login status
      this.authService.logout();
   }

   isLoginEnable() {
      return !this.loading && this.validate();
   }

   onLogin() {
      if (this.validate()) {
         this.doLogin();
      }
   }

   doLogin() {
      this.loading = true;
      this.authService.login(this.username, this.password)
         .subscribe(userData => {
            this.loading = false;
            // navigate to returnUrl just if login successfully
            if (userData.accessToken) {
               this.toastrService.success('Bienvenue', '');
               setTimeout(() => {
                  this.router.navigate(['/dashboard']);
               }, 1000);
            } else {
               this.translate.get('login.error-no-token-sent').subscribe(msg => {
                  this.toastrService.success(msg, '');
               });
            }
         }, error => {
            this.translate.get('login.error-user-unauthorized').subscribe(msg => {
               this.toastrService.error(msg, '');
            });
            this.loading = false;
         });
   }
}
