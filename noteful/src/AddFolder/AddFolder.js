import React, {Component} from 'react'
import Form from "../Form/Form"

export default class AddFolder extends Component{
    render(){
        return (
            <section>
                <h2> Create Folder</h2>
                <Form>
                    <div>
                    <label htmlFor='folder-name-input'>
                        Name
                    </label>
                    <input type='text' id='folder-name-input' />
                    </div>
                    <button type='submit'>
                        Add Folder
                    </button>
                </Form>
            </section>
        )
    }
}