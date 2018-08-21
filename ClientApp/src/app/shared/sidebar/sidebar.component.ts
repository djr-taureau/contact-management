import { Component, OnInit } from '@angular/core';
import { ROUTES } from '@app/shared/sidebar/sidebar-routes.config';
import { RouteInfo } from '@app/shared/sidebar/sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    $.getScript('./assets/js/app-sidebar.js');
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  // NGX Wizard - skip url change
  ngxWizardFunction(path: string) {
    if (path.indexOf('forms/ngx') !== -1)
      {
        this.router.navigate(['forms/ngx/wizard'], { skipLocationChange: false });
      }
  }
}
