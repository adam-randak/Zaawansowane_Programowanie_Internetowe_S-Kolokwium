import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Author from './Author';
import AuthorsList from './AuthorsList';
import { Form } from './Form';

type State = {
  authors: Author[]
}



export class App extends Component<{}, State> {
  constructor(props: {}) {
      super(props);
      this.state = {
          authors: []
      }
  }

  async componentDidMount() {
      let res = await fetch("https://localhost:5001/Authors");
      let authors = (await res.json()) as Author[];
      this.setState({ authors: authors });
  }

  addAuthor = async (author: Author): Promise<void> => {
      const request: RequestInit = {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(author)
      };

      const res = await fetch("https://localhost:5001/Authors", request);
      const authorResponse = (await res.json()) as Author;

      this.setState({ authors: [...this.state.authors, authorResponse] })

      console.log("safdsdfasdf")
  }

  editAuthor = async (author: Author): Promise<void> => {
      const request: RequestInit = {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(author)
      };

      const res = await fetch(`https://localhost:5001/Authors/${author.Id}`, request);
      const authorResponse = (await res.json()) as Author;

      this.setState({ authors: this.state.authors.map(p => p.Id === authorResponse.Id ? authorResponse : p) })

      console.log("edited")
  }

  render() {
      return (
          <div>
              <Form addAuthor={this.addAuthor} />
              {this.state.authors.length !== 0
                  ? <AuthorsList authors={this.state.authors} editAuthor={this.editAuthor} />
                  : <h1>Missing data</h1>}
          </div>
      )
  }
}

export default App;
