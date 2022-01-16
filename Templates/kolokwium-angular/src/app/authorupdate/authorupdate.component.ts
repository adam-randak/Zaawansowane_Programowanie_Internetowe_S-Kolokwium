import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from '../model/Author';

@Component({
  selector: 'app-authorupdate',
  template: `
  <form [(ngModel)]="author" #form="ngForm" (ngModelChange)="updateAuthor()">
  <label for="FirstName">
      <span>FirstName</span>
      <input [(ngModel)]="author.FirstName" name="first">
  </label>
  <label for="LastName">
      <span>Last Name</span>
      <input [(ngModel)]="author.LastName" name="last" >
  </label>
</form>
  `,
  styles: [
  ]
})
export class AuthorupdateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

@Input() author: Author = new Author() ;
@Output() onUpdateAuhtor: EventEmitter<Author> = new EventEmitter<Author>();

public updateAuthor(): void {
  this.onUpdateAuhtor.emit(this.author);
}

}
