import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  refresh(): void {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 500);
  }
}
