import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isVisible: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('isLogged') === 'yes') {
      this.isVisible = true;
    }
  }

  handleOnLogoutClick() {
    localStorage.setItem('isLogged', 'no');
    this.isVisible = false;
    this.router.navigate(['login']);
  }
}
