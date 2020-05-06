import React from 'react'
import { Task } from './Types'
import styled from 'styled-components';

type Props = {
    task: Task
    handleDone: (task: Task) => void
    handleDelete: (task: Task) => void
}

const TaskItem: React.FC<Props> =({ task, handleDone, handleDelete }) => {

    return (
        <Li className={task.done ? 'done' : ''}>
            <label>
                <CheckboxInput
                    type="checkbox"
                    onClick={() => handleDone(task)}
                    defaultChecked={task.done}
                />
                <CheckboxLabel>{ task.title }</CheckboxLabel>
            </label>
            <DeleteButton
                onClick={ () => handleDelete(task) }
            >削除</DeleteButton>
        </Li>
    )

}

const Li = styled.li`
    padding: 20px 10px;
    border-bottom: 1px solid #d7d2cd;
    display: flex;
    align-items: center;
    position: relative;
`;

const CheckboxInput = styled.input`
    display: none;
`;

const CheckboxLabel = styled.span`
    padding-left: 30px;
    position: relative;
    margin-right: 20px;
    &::before {
        content: "";
        display: block;
        position: absolute;
        top: 2px;
        left: 0;
        width: 18px;
        height: 18px;
        border: 1px solid #d7d2cd;
        border-radius: 4px;
    }
`;

const Button = styled.button`
    font-size: 15px;
    cursor: pointer ;
    font-weight: bold;
    display: inline-block;
    padding: 10px 15px;
    text-decoration: none;
    background: #668ad8;
    color: #FFF;
    border-bottom: solid 4px #627295;
    border-radius: 7px;
    outline: none;
`;

const DeleteButton = styled(Button)`
    background-color: #d86681;
    border-bottom-color: #956270;
`;


export default TaskItem