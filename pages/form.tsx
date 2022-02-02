import * as React from 'react';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
interface ImcFormProps {

}

interface HistoryProps {
    nom:string,
    age:string,
    imc:any
}

const
    Form = (props: ImcFormProps) => {

        //const dispatch = useDispatch();
        const [rempli, setRempli] = useState<boolean>(false);
        const [imc, setImc] = useState<number>(0);
        const [history, setHistory] = useState<HistoryProps[]>([]);
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

        return (
            <div className={"flex items-center justify-center min-h-screen bg-indigo-100"}>
                <div className={'bg-white shadow-lg rounded-xl flex flex-col items-stretch mb-10'}>
                    <div
                        className={'p-4 bg-blue-800 rounded-t-xl w-full lg:w-auto flex flex-col items-center justify-center'}>
                        <h3 className={'text-white text-lg font-bold'}>IMC Calculator</h3>
                    </div>
                    {!rempli ?
                        <div>
                            <div
                                className={'p-4 w-full lg:w-auto'}>
                                <h5 className={'mb-2 text-center text-lg font-bold text-blue-900'}>Formulaire</h5>
                                <div className={'my-2 flex flex-wrap mt-4 -mx-2 mr-4'}>
                                    <div className={'w-full sm:w-1/2 p-2 flex'}>
                                        <div className='text-base text-blue-900 flex-1 m-2 pt-2'>Nom</div>
                                        <div className='flex-1 m-2'><input value={formState?.values?.["nom"]} onChange={(v)=>{
                                            handleChange("nom",v.target.value)
                                        }} type="text" className=' border border-inherit py-2 px-4 rounded h-10 focus:outline-none focus:ring focus:ring--cyan-700 hover:border-cyan-700' name="nom" id="nom" /></div>
                                    </div>
                                    <div className={'w-full sm:w-1/2 p-2 flex'}>
                                        <div className='text-base text-blue-900 flex-1 m-2 pt-2'>Poids(Kg)</div>
                                        <div className='flex-1 m-2'><input type="number"  value={formState?.values?.["poids"]} onChange={(v)=>{
                                            handleChange("poids",v.target.value)
                                        }} placeholder='Poids en Kg...' className=' border border-inherit py-2 px-4 rounded h-10 focus:outline-none focus:ring focus:ring--cyan-700 hover:border-cyan-700' name="poids" id="poids" /></div>
                                    </div>
                                </div>
                                <div className={'my-2 flex flex-wrap mt-4 -mx-2 mr-4'}>
                                    <div className={'w-full sm:w-1/2 p-2 flex'}>
                                        <div className='text-base text-blue-900 flex-1 m-2 pt-2'>Taille(cm)</div>
                                        <div className='flex-1 m-2'><input type="number"  value={formState?.values?.["taille"]} onChange={(v)=>{
                                            handleChange("taille",v.target.value)
                                        }} placeholder='Taille en cm...' className=' border border-inherit py-2 px-4 rounded h-10 focus:outline-none focus:ring focus:ring--cyan-700 hover:border-cyan-700' name="taille" id="taille" /></div>
                                    </div>
                                    <div className={'w-full sm:w-1/2 p-2 flex'}>
                                        <div className='text-base text-blue-900 flex-1 m-2 pt-2'>Date de Naissance</div>
                                        <div className='flex-1 m-2'><input type="date"  value={formState?.values?.["date_naiss"]} onChange={(v)=>{
                                            handleChange("date_naiss",v.target.value)
                                        }} className=' border border-inherit py-2 px-4 rounded h-10 focus:outline-none focus:ring focus:ring--cyan-700 hover:border-cyan-700' name="date_naiss" id="date_naiss" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full lg:w-auto flex mb-8 flex-col items-center justify-center'>
                                <button className='bg-blue-600 text-white text-base rounded hover:bg-blue-800 py-2 px-3 font-semibold' onClick={()=>{
                                        setHistory(
                                            [...history, 
                                                {
                                                    nom:formState?.values?.["nom"],
                                                    imc:(formState?.values?.["poids"]/((formState?.values?.["poids"]/100)*(formState?.values?.["poids"]/100))).toFixed(1),
                                                    age:formState?.values?.["date_naiss"]
                                                }
                                            ]
                                        )
                                        setRempli(true)
                                    }}>Determiner mon imc</button>
                            </div>
                        </div> :
                        <div>
                            <div
                                className={'p-4 w-full lg:w-auto'}>
                                <h5 className={'mb-2 text-center text-lg font-bold text-blue-900'}>Resultat</h5>
                                <div className={'my-2 flex flex-wrap mt-4 -mx-2 mr-4'}>
                                    <div className={'w-full flex'}>
                                        <div className='text-base text-blue-900 flex-1 m-2'>{formState?.values?.["nom"] +" votre Indice de Masse Corporel est de :"} </div>
                                        <div className='flex-1 m-2 pl-4 text-lg font-bold'>{(formState?.values?.["poids"]/((formState?.values?.["taille"]/100)*(formState?.values?.["taille"]/100))).toFixed(1) || 0} </div>
                                    </div>
                                </div>
                                <div className={'my-2 flex flex-wrap mt-4 -mx-2 mr-4'}>
                                    <div className={'w-full sm:w-1/2 p-2 flex'}>
                                    <button onClick={()=>{
                                        setFormState({
                                            values: {},
                                            errors: {},
                                            touched: {},
                                            isValid: false,
                                            isSubmit: false,
                                        })
                                        setRempli(false)
                                    }} className='bg-blue-600 text-white text-sm rounded hover:bg-blue-800 py-2 px-2 font-semibold'>Calculer à nouveau</button>
                                    </div>
                                    <div className={'w-full sm:w-1/2 p-2 flex'}>
                                    <button className='bg-blue-600 text-white text-sm rounded hover:bg-blue-800 py-2 px-2 font-semibold'>Consulter mon historique</button>
                                    </div>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>)
    };

export default Form