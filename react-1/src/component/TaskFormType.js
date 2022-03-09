import React , { useState } from "react";

const TaskFormType = (props) => {
    const [ content ,  setState] = useState({id: 0 ,title: "", time: "", complexity: "", room: ""});
    const handleChange = (event) => {
        setState({ ...content, [event.target.name] : event.target.value });
    }

        return(
        <div>
            <form onSubmit={event => props.onSubmit(event, content)}>
            <table>
                <thead>
                    <tr>
                        <th colSpan={3}>Titre : </th>
                        <th colSpan={3}>Durée : </th>
                        <th colSpan={3}>complexité : </th>
                        <th colSpan={3}>Piéce : </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={3}>
                            <label>
                                <input name="title" type="text" value={content.title} onChange={event => handleChange(event)} required/>                    
                            </label>
                        </td>
                        <td colSpan={3}>
                            <label>
                                <input name="time" type="number" value={content.time} onChange={event => handleChange(event)} required/>                    
                            </label>    
                        </td>
                        <td colSpan={3}>
                            <label>
                                <input name="complexity" type="number" value={content.complexity} onChange={event => handleChange(event)} required/>                    
                            </label>
                        </td>
                        <td colSpan={3}>
                            <label>
                                <input name="room" type="text" value={content.room} onChange={event => handleChange(event)} required/>                    
                            </label>
                        </td>
                    </tr>
                </tbody>
            </table>
                <input type={"submit"} value="submit" />
            </form>
        </div>
    )
}

export default TaskFormType;