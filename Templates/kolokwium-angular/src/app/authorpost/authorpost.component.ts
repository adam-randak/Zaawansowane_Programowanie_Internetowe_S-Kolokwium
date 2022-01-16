import { Component, OnInit } from '@angular/core';
import { Author } from '../model/Author';
@Component({
  selector: 'app-authorpost',
  template: `

  `,
  styles: [
  ]
})
export class AuthorpostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public author: Author;

}
