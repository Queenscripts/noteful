import React, {Component} from 'react'
import Form from "../Form/Form"
import PropTypes from 'prop-types';


export default class AddFolder extends Component{
    render(){
        return (
            <section>
                <h2> Create Folder</h2>
                <Form onSubmit = {e => 
                {  
                    this.props.folderSubmit(e)
                    if(this.props.folder){
                         this.props.history.push('/')
                     }
                }
                    }>
                    <label htmlFor='folder-name-input'>
                        Name
                    </label>
                    <input type='text' id='folder-name-input' value={this.props.folder} onChange={this.props.newFolder}/>
                    {this.props.nameError}
                    <button type='submit'>
                        Add Folder
                    </button>
                </Form>                
            </section>
        )
    }
}

AddFolder.propTypes={
    folder: PropTypes.string.isRequired,
    folderSubmit: PropTypes.func,
    newFolder: PropTypes.func
};