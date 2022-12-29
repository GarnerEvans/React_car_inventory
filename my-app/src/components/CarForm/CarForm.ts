import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseMake, chooseModel, chooseYear, chooseColor } from '../../redux/slices/RootSlice';
import { Input } from './../SharedComponents/input'
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';


interface CarFormProps {
    id?: string;
    data?: {}
};

interface CarState{
    make: string;
    model: string;
    year: string;
    color: string;
}

export const CarForm = (props:CarFormProps) => {

    const dispatch = useDispatch(); // This is a Redux-specific hook that updates the store
    const store = useStore();
    const name = useSelector<CarState>(state => state.make);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        // The ! is for strictly typed Typescript stuff
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            // Dispatch basically updates our state / Redux store
export const ContactForm = (props:CarFormProps) => {

    const dispatch = useDispatch(); // This is a Redux-specific hook that updates the store
    const store = useStore();
    const name = useSelector<CarState>(state => state.make);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        // The ! is for strictly typed Typescript stuff
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            // Dispatch basically updates our state / Redux store
            dispatch(chooseMake(data.make));
            dispatch(chooseModel(data.model));
            dispatch(chooseYear(data.year));
            dispatch(chooseColor(data.color));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Car Make</label>
                    <Input {...register('make')} name="make" placeholder='make'/>
                </div>
                <div>
                    <label htmlFor="Model">Model</label>
                    <Input {...register('model')} name="model" placeholder='model'/>
                </div>
                <div>
                    <label htmlFor="Year">Year</label>
                    <Input {...register('year')} name="Year" placeholder='year'/>
                </div>
                <div>
                    <label htmlFor="Color">Color</label>
                    <Input {...register('color')} name="color" placeholder='color'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
