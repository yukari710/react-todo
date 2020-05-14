import React from 'react'
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'
import { RootState } from '../rootReducer'
import styled from 'styled-components';

const TaskList : React.FC = () => {

    const { tasks } = useSelector((state: RootState) => state.tasks)


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