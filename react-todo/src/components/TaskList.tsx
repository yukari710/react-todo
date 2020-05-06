import React from 'react'
import TaskItem from './TaskItem'
import { Task } from './Types'
import styled from 'styled-components';

type Props = {
    tasks: Task[]
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>
}

const TaskList : React.FC<Props> = ({ tasks, setTasks}) => {

    const handleDone = (task: Task) => {
        setTasks(prev => prev.map(t =>
            t.id === task.id
                ? { ...task, done: !task.done }
                : t
            ))
    }

    const handleDelete = (task: Task) => {
        setTasks(prev => prev.filter(t =>
            t.id !== task.id
        ))
    }

    return (
        <Inner>
            {
                tasks.length <= 0 ? '登録されたTODOはありません。' :
                <TaskListStyle>
                    {
                        tasks.map(task => (
                            <TaskItem
                                key={task.id}
                                task={task}
                                handleDelete={handleDelete}
                                handleDone={handleDone}
                            />
                        ))
                    }
                </TaskListStyle>
            }
        </Inner>
    )

}

const Inner = styled.div`
    max-width: 700px;
    margin: 0 auto;
`;

const TaskListStyle = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    border-top: 1px solid #d7d2cd;
`;

export default TaskList