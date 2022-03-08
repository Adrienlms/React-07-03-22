import React , { useState } from "react";
import ContentTask from "./ContentTask";
import TaskFormType from "./TaskFormType";

const TaskList = (props) => {
    const [list ,  setList] = useState(props.list);

    const handleSubmit = (event, content) => {
        event.preventDefault();
        setList([...list, content]);
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
                        </tr>
                    </thead>
                    <tbody>
                        { list.map((x , index) => <ContentTask content={x} key={index}/>)}
                    </tbody>
            </table>
            -------------------------------------------------------
            <TaskFormType onSubmit={handleSubmit}/>
        </div>
    )
}

export default TaskList;