import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../modules/tasksModule'
import styled from 'styled-components';

const TaskInput: React.FC = () => {
    const dispatch = useDispatch()

    const [ inputTitle, setInputTitle ] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value)
    }

    const handleSubmit = () => {
        dispatch(addTask(inputTitle))
        setInputTitle('')
    }

    return (
        <InputForm>
            <Inner>
                <Input
                    type="text"
                    value={inputTitle}
                    onChange={handleInputChange}
                    placeholder="TODOを入力してください。"
                />
                <Button onClick={handleSubmit}>追加</Button>
            </Inner>
        </InputForm>
    )
}

const InputForm = styled.div`
    margin-bottom: 40px;
    background: #f9f3ee;
    padding: 40px 0;
    border-bottom: 1px solid #d7d2cd;
`;

const Inner = styled.div`
    display: flex;
    max-width: 700px;
    margin: 0 auto;
`;

const Input = styled.input`
    width: 80%;
    font-size: 15px;
    outline: none;
    border: solid 3px #d7d2cd;
    padding: 10px;
    border-radius: 7px;
    margin-right: 10px;
    &:focus {
        background: #f9f9f0;
    }
`;

const Button = styled.button`
    width: 20%;
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
    &:active {
    transform: translateY(4px);
    border-bottom: none;
    margin-bottom: 4px;
    }
`;

export default TaskInput