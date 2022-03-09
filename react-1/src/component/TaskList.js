import React , { useContext, useReducer, useState } from "react";
import ContentTask from "./ContentTask";
import TaskFormType from "./TaskFormType";

const TaskList = (props) => {
    const [list ,  setList] = useState(props.list);

    const handleSubmit = (event, content) => {
        event.preventDefault();
        setList([...list, {...content, id: list.length + 1}]);
    }

    const handleRemove = (content) => {
        setList(list.filter(f => f.id !== content.id ))
    }
        return(
        <div>
            <table>
                    <thead>
                        <tr>
                            <th colSpan={3}>Titre</th>
                            <th colSpan={3}>Durée</th>
                            <th colSpan={3}>complexité</th>
                            <th colSpan={3}>Piéce</th>
                            <th colSpan={3}>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        { list.map((x , index) => <ContentTask content={x} key={index} removeContent={handleRemove}/>)}
                    </tbody>
            </table>
            -------------------------------------------------------
            <TaskFormType onSubmit={handleSubmit} />
        </div>
    )
}

export default TaskList;