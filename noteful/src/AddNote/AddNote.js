import React from 'react'
import Form from "../Form/Form"

export default class AddNote extends React.Component{
    static defaultProps={
        folders: []

    }
    render(){
        const {folders} = this.props
    return(
        <section>
            <h2> Create Note</h2>
            <Form>
                <div>
                    <label htmlFor='note-name-input'>
                        Name
                    </label>
                    <input type='text' id='note-name-input'/>
                </div>
                <div>
                    <label htmlFor='note-content-input'>
                        Content
                    </label>
                    <textarea id='note-content-input' />
                </div>
                <div>
                    <label htmlFor='note-folder-select'>
                        Folder
                    </label>
                    <select id='note-folder-select'>
                        <option value={null}>...</option>{folders.map(folder => <option key={folder.id} value={folder.id}>
                            {folder.name}
                        </option>)}
                    </select>
                </div>
                <button type='submit'>
                            Add Note
                </button>
            </Form>
        </section>
    )
}}