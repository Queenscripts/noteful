import React from 'react';
import FolderNotes from "../Folder/FolderNotes"

export default function PageMain (props){
    return(
        <section> 
            <FolderNotes
                id={props.note.id}
                name={props.note.name}
                modified={props.note.modified}
            />
            <div>{props.note.content.split(/\n \r|\n/).map((para,i) => <p key={i}> {para}</p>
                    )}
            </div>
        </section>
    )
}

PageMain.defaultProps = {
    note: {
        content:"",
    }
}