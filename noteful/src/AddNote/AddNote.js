import React from 'react'
import Form from "../Form/Form"
import ApiContext from '../ApiContext'
import PropTypes from 'prop-types'

export default class AddNote extends React.Component{

    static defaultProps={
        match: {
            params: {}
          }
    }
    static contextType = ApiContext;

    render(){ 
    const {folders} = this.context
    return(
        <section>
            <h2> Create Note</h2>
            <Form onSubmit = {e => {
                this.props.handleSubmit(e)
                if(this.props.name){
                    this.props.history.push('/')
                }
            }}
            >
                <div>
                    <label htmlFor='note-name-input' >
                        Name
                    </label>
                    <input type='text' id='note-name-input' value={this.props.name} onChange={this.props.onNameChange}/>
                    {this.props.nameError}
                </div>
                <div>
                    <label htmlFor='note-content-input'>
                        Content
                    </label>
                    <textarea id='note-content-input' value={this.props.content} onChange={this.props.onContentChange} />
                </div>
                <div>
                    <label htmlFor='note-folder-select'>
                        Folder
                    </label>
                    <select id='note-folder-select' value={this.props.folder} onChange={this.props.onfolderChange}>
                        <option value={null}>...</option>
                        
                        {folders.map(folder => 
                            <option key={folder.id} value={folder.id}>
                            {folder.name}
                            </option>
                        )}
                    </select>
                </div>
                <button type='submit'>
                            Add Note
                </button>
            </Form>
            </section>
        )
    }
}

AddNote.propTypes={
    handleSubmit: PropTypes.func,
    onContentChange: PropTypes.func,
    onNameChange: PropTypes.func,
    onfolderChange: PropTypes.func,
    content: PropTypes.string,
    folder: PropTypes.string.isRequired,
};