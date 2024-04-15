import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Add() {
    const { register, handleSubmit } = useForm();
    const navi = useNavigate();

    function saveData(data) {
        axios.post('http://localhost:5000/users', data)
        navi('/user/show')
    }
    return (
        <>
            <div className='container border border-4 w-75'>
                <center><u><b><h1>Tuition form:</h1></b></u></center>
                <form onSubmit={handleSubmit(saveData)} className='m-auto'>
                    <label htmlFor='n'>Student Name</label>
                    <input type='text' id='n' className='form-control'
                        {...register('name')} />
                    <br /><br />
                    <label htmlFor='sn'>Subject Name</label>
                    <input type='text' id='sn' className='form-control'
                        {...register('sname')} />
                    <br /><br />
                    <label htmlFor='c'>City</label>
                    <input type='text' id='c' className='form-control'
                        {...register('city')} />
                    <br /><br />
                    <label htmlFor='f'>Fee</label>
                    <input type='number' id='f' className='form-control'
                        {...register('fee')} />
                    <br /><br />
                    <input type='submit' value='Add' className='btn btn-outline-success col-6 btn-lg' />
                    <input type='reset' value='cancel' className='btn btn-outline-warning col-6 btn-lg' />
                </form>

            </div>
        </>
    )
}

export default Add