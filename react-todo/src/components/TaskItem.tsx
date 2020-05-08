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
    &.done span {
        text-decoration: line-through;
    }
    &:hover button {
        display: block;
    }
`;

const Label = styled.label`
    width: calc(100% - 100px);
    display: block;
    cursor: pointer;
`;

const CheckboxInput = styled.input`
    display: none;
    &:checked + span {
        color: #999;
        &::after {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 5px;
            width: 7px;
            height: 14px;
            transform: rotate(40deg);
            border-bottom: 3px solid #d01137;
            border-right: 3px solid #d01137;
        }
    }
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