import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { Author } from '../model/Author';
import { AuthorsService } from '../authors.service';


@Component({
  selector: 'app-authors',
  template: `
  <section>
     <app-authorslist [authors]="authors" (onSelectAuthor)="selectAuthor($event)"></app-authorslist>
  </section>
  <section>
      <app-authorupdate [author]="selectedAuthor" (onUpdateAuthor)="putAuthor($event)"></app-authorupdate>
  </section>
  <section>
     <app-authorpost></app-authorpost>
  </section>

  `,
  styles: [
  ]
})
export class AuthorsComponent implements OnInit {

  constructor(private authorsService: AuthorsService) { }

  ngOnInit(): void {
    this.getAuthors();
  }

  public authors: Array<Author>;

  public selectedAuthor: Author;

  public getAuthors(): void {
    this.authorsService.getAuthors().subscribe(result => this.authors = result);
  }

  
  public selectAuthor(author: Author): void {
    this.selectedAuthor = author;
  }

  public postAuthor(author: Author): void {
    this.authorsService.postAuthor(author).subscribe(() => { this.getAuthors(); });
  }

  public putAuthor(author: Author): void {
    this.authorsService.putAuthor(author.Id, author).subscribe(() => { this.getAuthors(); });
  }


}
