import React, { Component } from 'react'
import Author from './Author'
import EditForm from './EditForm'

type Props = {
    authors: Author[],
    editAuthor: (author: Author) => void,
}

type State = {
    editedAuthor: number
}

export class AuthorsList extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            editedAuthor: 0
        }
    }

    setIsEdited = (id: number): void => {
        this.setState({ editedAuthor: id })
    }

    render() {
        return (
            <ul>
                {this.props.authors.map(p =>
                    <li key={p.Id}>
                        <button style={{ margin: "5px" }} onClick={() => this.setIsEdited(p.Id!)}>Edit</button>
                        <span>Id: {p.Id} || FirstName: {p.FirstName} || LastName: {p.LastName}</span>
                        {this.state.editedAuthor === p.Id && <EditForm editAuthor={this.props.editAuthor} author={p} setIsEdited={this.setIsEdited} />}
                    </li>
                )}
            </ul>
        )
    }
}

export default AuthorsList