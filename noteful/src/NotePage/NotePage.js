import React from 'react'
import Note from '../Note/Note'

export default function NotePage(props){
    return(
        <section>
            <button
                tag='button'
                role='link'
                onClick={()=> props.history.goBack()}
                >
                    Back
            </button>
            {props.folder && (
                <h3>
                    {props.folder.name}
                </h3>
            )}
        </section>
    )
}

NotePage.defaultProps={
    history:{
        goBack: ()=>{}
    }
}
