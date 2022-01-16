import React, { Component, FormEvent } from 'react'
import Author from './Author'

type State = {
    id: number,
    firstNameInput: string,
    lastNameInput: string,
}

type Props = {
    editAuthor: (author: Author) => void,
    setIsEdited: (authorId: number) => void,
    author: Author
}

export class EditForm extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            id: this.props.author.Id!,
            firstNameInput: this.props.author.FirstName,
            lastNameInput: this.props.author.LastName
        }
    }

    formSubmitHandler = (e: FormEvent): void => {
        e.preventDefault();

        const editedAuthor: Author = {
            Id: this.state.id,
            FirstName: this.state.firstNameInput,
            LastName: this.state.lastNameInput
        }

        this.props.editAuthor(editedAuthor);

        this.setState({ firstNameInput: "", lastNameInput: "" })
        this.props.setIsEdited(0);
    }

    render() {
        return (
            <form onSubmit={this.formSubmitHandler}>
                <label>First name</label>
                <input type="text" value={this.state.firstNameInput} onChange={(e) => this.setState({ ...this.state, firstNameInput: e.target.value })} required />

                <label>Last name</label>
                <input type="text" value={this.state.lastNameInput} onChange={(e) => this.setState({ ...this.state, lastNameInput: e.target.value })} required />
                <br />
                <button type='submit'>Save</button>
                <button type='button' onClick={() => this.props.setIsEdited(0)}>Cancel</button>
            </form>
        )
    }
}

export default EditForm