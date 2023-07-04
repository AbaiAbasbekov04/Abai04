import React from 'react';
import {useForm} from 'react-hook-form'

const Registration = () => {
    const {register, handleSubmit, formState : {errors}} = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }

    return(
        <form className="registration-form" onSubmit={handleSubmit(onSubmit)}>    
            <div className="forms">
                <label>Фамилия:</label>
                <input {...register('lastName', { required: true })} />
                {errors.lastName && <span>Обязательное поле</span>}
            </div>
            <div className='forms'>
                <label>Имя:</label>
                <input {...register('firstName', {required: true})}/>
                {errors.firstName && <span>Обязательное поле</span>}
            </div>
            <div className='forms'>
                <label>Отчество</label>
                <input {...register('middleName')}/>
            </div>
            <div className='forms'>
                <label>Год рождение:</label>
                <input {...register('birthYear', {pattern: /^[0-9]{4}$/})}/>
                {errors.birthYear && <span>Введите в формате YYYY</span>}
            </div>
            <div className='forms'>
                <label>Номер телефона:</label>
                <input {...register('Number', {required: true})}/>
                {errors.Number && <span>Обязательное поле</span>}
            </div>
            <div className='forms'>
                <label>Email:</label>
                <input {...register('email', {required: true, pattern: /^\S+@\S+$/i })}/>
                {errors.email && <span>Введите действительный адрес</span>}
            </div>

            <button className='submit-button' type='submit'>Зарегистрироваться</button>
        </form>
    );
};
export default Registration;