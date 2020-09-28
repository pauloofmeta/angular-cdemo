import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { filter } from "rxjs/operators";

interface BreadcrumbItem {
  label: string;
  url: string;
}

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  items: BreadcrumbItem[];
  readonly home = {
    label: 'Home',
    url: ''
  };

  constructor (
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        this.items = this.build(this.activatedRoute.root);
        this.items = [this.home, ...this.items];
      });
  }

  private build(route: ActivatedRoute, items: BreadcrumbItem[] = [],
    url: string = ''): BreadcrumbItem[] {
    const children = route.children;
    if (children.length === 0) {
      return items;
    }

    for (const child of children) {
      const routeUrl = child.snapshot.url.map(seg => seg.path).join('/');
      if (routeUrl !== '') {
        url += `/${routeUrl}`;
      }

      const label = child.snapshot.data['breadcrumb'];
      if (!isNullOrUndefined(label) && label !== this.home.label) {
        items.push({label, url});
      }

      return this.build(child, items, url);
    }
  }

}
