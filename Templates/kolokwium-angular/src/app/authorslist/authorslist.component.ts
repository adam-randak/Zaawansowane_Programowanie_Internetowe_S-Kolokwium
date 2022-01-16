import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import { Author } from '../model/Author';

@Component({
  selector: 'app-authorslist',
  template: `
  <table>
    <thead>
        <tr><th>Id</th><th>First Name</th><th>Last Name</th></tr>
      </thead>
      <tbody>
        <tr *ngFor="let author of authors" (click)="selectAuthor(author)">
          <td>{{ author.Id }}</td><td>{{author.FirstName }}</td><td>{{ author.LastName }}</td>
      </tbody>
</table>
  `,
  styles: [
  ]
})
export class AuthorslistComponent implements OnInit {

  constructor() { }

  @Input () authors: Array<Author>
  ngOnInit(): void {this.selectAuthor(this.authors[0]);
  }


@Output() onSelectedAuthor: EventEmitter<Author> = new EventEmitter<Author>();

public selectAuthor(author: Author): void{
  this.onSelectedAuthor.emit(author);
}

}
