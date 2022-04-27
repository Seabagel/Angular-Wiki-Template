import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

interface IBooks {
  name: string;
  route: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  pageMaincategory = ''!;
  pageSubcategory? = '';

  books: IBooks[] = [
    { name: '🎨🍊 Blender', route: 'blender' },
    { name: '🎨🧱 Miniature Painting', route: 'miniature-painting' },
  ];

  changeCategory(index: number) {
    this.pageMaincategory = this.books[index].name;
  }

  mainNavigationClosed: boolean = true;
  clickEvent() {
    this.mainNavigationClosed = !this.mainNavigationClosed;
  }

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Book Category
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(
        () =>
          (this.pageMaincategory = this.books.find(
            (e) => e.route === this.router.url.split('/').splice(1, 1).pop()
          )?.name!)
      );

    // Subcategory
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(
        () => (this.pageSubcategory = this.router.url.split('/').pop())
      );
  }
}
