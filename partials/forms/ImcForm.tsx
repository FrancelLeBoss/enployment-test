import * as React from 'react';
import {useEffect, useState} from "react";
import {ChevronDownIcon, EyeIcon, EyeOffIcon, TranslateIcon} from "@heroicons/react/solid";
// @ts-ignore
import {OldSocialLogin as SocialLogin} from 'react-social-login';
import {useDispatch, useSelector} from "react-redux";
// import { LinkedIn } from 'react-linkedin-login-oauth2';
import {useRouter} from "next/router";
import Link from 'next/link';

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
IMCForm = (props: ImcFormProps) => {

    const dispatch = useDispatch();
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



    return (
        <div className={'flex items-center justify-center'}   
        style={{
        minHeight: "calc(100vh - 107px)"
    }}
        >
            <div className={'bg-white shadow-lg rounded-xl flex flex-wrap items-stretch mb-10'}>
                <div
                    className={'bg-dark p-4 lg:rounded-l-xl lg:rounded-t-none rounded-l-none rounded-t-xl w-full lg:w-auto flex flex-col items-center justify-center'}>
                    <img src="/logo_sm.png" className={'h-6 sm:h-12 w-auto object-contain'} alt=""/>
                        Let’s connect the world
                </div>
                <div className={'my-2 flex flex-wrap mt-4 -mx-2'}>
                        <div className={'w-full sm:w-1/2 p-2'}>
                            <input type="text" name="" id="" />
                        </div>
                        <div className={'w-full sm:w-1/2 p-2'}>
                            TOTO
                        </div>
                    </div>
                    <div className={'flex justify-center'}>
                        <button className='' onClick={handleSubmit}>
                            Calculer
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default IMCForm