import * as React from 'react';
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
interface ImcFormProps {

}


const schema = {
    email: {
        presence: {
            allowEmpty: false,
            message: "login_page_provide_email",
        },
        email: {message: "login_page_provide_valid_email"},
    },
    password: {
        presence: {
            allowEmpty: false,
            message: "login_page_provide_password",
        },
    },
};

const 
Form = (props: ImcFormProps) => {

    //const dispatch = useDispatch();
    const [visible, setVisible] = useState<boolean>(false);
    const [loadingSocial, setLoadingSocial] = React.useState(false);
    const router = useRouter();
    const [formState, setFormState] = useState<any>({
        values: {},
        errors: {},
        touched: {},
        isValid: false,
        isSubmit: false,
    });
    const handleChange = (props: string, value: string) =>
        setFormState((formState) => ({
            ...formState,
            touched: {
                ...formState.touched,
                [props]: true,
            },
            values: {
                ...formState.values,
                [props]: value,
            },
        }));

    const validateForm = () => {
        /*let errors = validate(formState.values, schema, {fullMessages: false});
        setFormState((formState) => ({
            ...formState,
            isValid: !errors,
            errors: errors || {},
        }));*/
    };

    useEffect(() => {
        validateForm();
    }, [formState.values]);

    const hasError = (field) =>
        !!(formState.touched[field] || formState.isSubmit) &&
        formState.errors[field];

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!formState.isValid) {
            setFormState((formState) => ({
                ...formState,
                touched: {
                    email: true,
                    password: true,
                },
            }));
            validateForm();
            return;
        }
        const {email, password} = formState.values || {};
    };



    return(
    <div className={"flex items-center justify-center min-h-screen"}>
        <div className={'bg-white shadow-lg rounded-xl flex flex-col items-stretch mb-10'}>
            <div
                className={'p-4 bg-blue-800 rounded-t-xl w-full lg:w-auto flex flex-col items-center justify-center'}>
                <h3 className={'text-white text-lg font-bold'}>IMC Calculator</h3>
            </div>
            <div
                className={'p-4 w-full lg:w-auto'}>
                <h5 className={'mb-2 text-center text-lg font-bold text-blue-900'}>Formulaire</h5>
                <div className={'my-2 flex flex-wrap mt-4 -mx-2 mr-4'}>
                        <div className={'w-full sm:w-1/2 p-2 flex'}>
                            <div className='text-base text-blue-900 flex-1 m-2 pt-2'>Nom</div> 
                            <div className='flex-1 m-2'><input type="text" className=' border border-inherit py-2 px-4 rounded h-10 focus:outline-none focus:ring focus:ring--cyan-700 hover:border-cyan-700' name="nom" id="nom" /></div>
                        </div>
                        <div className={'w-full sm:w-1/2 p-2 flex'}>
                            <div className='text-base text-blue-900 flex-1 m-2 pt-2'>Poids(Kg)</div> 
                            <div className='flex-1 m-2'><input type="number" placeholder='Poids en Kg...' className=' border border-inherit py-2 px-4 rounded h-10 focus:outline-none focus:ring focus:ring--cyan-700 hover:border-cyan-700' name="poids" id="poids" /></div>
                        </div>
                </div>
                <div className={'my-2 flex flex-wrap mt-4 -mx-2 mr-4'}>
                        <div className={'w-full sm:w-1/2 p-2 flex'}>
                            <div className='text-base text-blue-900 flex-1 m-2 pt-2'>Taille(cm)</div> 
                            <div className='flex-1 m-2'><input type="number" placeholder='Taille en cm...' className=' border border-inherit py-2 px-4 rounded h-10 focus:outline-none focus:ring focus:ring--cyan-700 hover:border-cyan-700' name="taille" id="taille" /></div>
                        </div>
                        <div className={'w-full sm:w-1/2 p-2 flex'}>
                            <div className='text-base text-blue-900 flex-1 m-2 pt-2'>Date de Naissance</div> 
                            <div className='flex-1 m-2'><input type="date" className=' border border-inherit py-2 px-4 rounded h-10 focus:outline-none focus:ring focus:ring--cyan-700 hover:border-cyan-700' name="date_naiss" id="date_naiss" /></div>
                        </div>
                </div>
            </div>
            <div className='w-full lg:w-auto flex mb-8 flex-col items-center justify-center'>
                <button className='bg-blue-600 text-white text-base rounded hover:bg-blue-800 py-2 px-3 font-semibold'>Determiner mon imc</button>
            </div>
        </div>
    </div>)
};

export default Form