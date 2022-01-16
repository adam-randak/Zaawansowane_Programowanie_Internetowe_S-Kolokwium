import React, { Component, FormEvent } from 'react'
import Author from './Author';

type State = {
    firstNameInput: string,
    lastNameInput: string,
}

type Props = {
    addAuthor: (author: Author) => void
}

export class Form extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            firstNameInput: "",
            lastNameInput: ""
        }
    }

    formSubmitHandler = (e: FormEvent): void => {
        e.preventDefault();

        const newAuthor: Author = {
            FirstName: this.state.firstNameInput,
            LastName: this.state.lastNameInput
        }

        this.props.addAuthor(newAuthor);

        this.setState({ firstNameInput: "", lastNameInput: "" })
    }

    render() {
        return (
            <form onSubmit={this.formSubmitHandler}>
                <label>First name</label>
                <input type="text" value={this.state.firstNameInput} onChange={(e) => this.setState({ ...this.state, firstNameInput: e.target.value })} required />

                <label>Last name</label>
                <input type="text" value={this.state.lastNameInput} onChange={(e) => this.setState({ ...this.state, lastNameInput: e.target.value })} required />

                <button type='submit'>Save</button>
            </form>
        )
    }
}

export default Form