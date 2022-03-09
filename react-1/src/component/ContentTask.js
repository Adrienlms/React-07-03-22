import React from "react";

const ContentTask = (props) => {
        //console.log(props.content)
        return(
            <tr>
                <td colSpan={3}>{props.content.title}</td>
                <td colSpan={3}>{props.content.time} Minute</td>
                <td colSpan={3}>{props.content.complexity} /10</td>
                <td colSpan={3}>{props.content.room}</td>
                <td colSpan={3}><button onClick={() => props.removeContent(props.content)}>remove</button></td>
            </tr>
    )
}

export default ContentTask;

