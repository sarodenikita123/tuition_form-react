import React from 'react';
import { useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form';

function Update() {
    const { register, handleSubmit, setValue } = useForm();
    const { userId } = useParams();
    const navi = useNavigate();

    async function fetchData() {
        const result = await axios.get(`http://localhost:5000/users/${userId}`)
        setValue('name', result.data.name);
        setValue('sname', result.data.sname);
        setValue('city', result.data.city);
        setValue('fee', result.data.fee)
    }

    function saveData(data) {
        axios.put(`http://localhost:5000/users/${userId}`, data)
        navi('/user/show')
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <div className='container'>
                <center><u><b><h1>Update form</h1></b></u></center>
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
                    <input type='submit' value='update' className='btn btn-outline-success col-6 btn-lg' />
                    <NavLink to='/user/show'><input type='reset' value='cancel' className='btn btn-outline-warning col-6 btn-lg' /></NavLink>
                </form>
            </div>
        </>
    )
}

export default Update