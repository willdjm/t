"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaCheck, FaRegUser } from "react-icons/fa";
import { MdOutlineMailOutline, MdLockOutline, MdClose } from "react-icons/md";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PreCadastro = () => {
    const [selectedRole, setSelectedRole] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleRoleChange = (role: string) => {
        setSelectedRole(prevRole => prevRole === role ? '' : role);
        setErrors(prevErrors => ({
            ...prevErrors,
            role: ''
        }));
    };

    const handleFocus = (field: string) => {
        setErrors(prevErrors => ({
            ...prevErrors,
            [field]: ''
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const newErrors: { [key: string]: string } = {};
        if (!selectedRole) newErrors.role = 'O papel é obrigatório.';
        if (!firstName) newErrors.firstName = 'O primeiro nome é obrigatório.';
        if (!lastName) newErrors.lastName = 'O último nome é obrigatório.';
        if (!email) newErrors.email = 'O e-mail é obrigatório.';
        if (!password) newErrors.password = 'A senha é obrigatória.';
        if (!confirmPassword) newErrors.confirmPassword = 'A confirmação de senha é obrigatória.';
        if (password !== confirmPassword) newErrors.passwordMatch = 'As senhas não coincidem.';

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        const formData = {
            selectedRole,
            firstName,
            lastName,
            email,
            password,
        };

        try {
            await axios.post('', formData);
            const formattedData = `
        Dados Enviados:
        - Papel: ${selectedRole}
        - Primeiro Nome: ${firstName}
        - Último Nome: ${lastName}
        - E-mail: ${email}
        - Senha: ${password}
      `;
            toast.success('Cadastrado com sucesso! Aguarde, estamos direcionando para finalizar seu cadastro.');
            console.log(formattedData);

            // Determine a URL de redirecionamento com base no papel selecionado
            const redirectUrl = selectedRole === 'aluno' ? '/cadastro-aluno' : '/cadastro-professor';

            // Aguarda 5 segundos antes de redirecionar
            setTimeout(() => {
                window.location.href = redirectUrl;
            }, 5000);
        } catch (error) {
            toast.error('Houve um erro em sua tentativa, tente novamente mais tarde!');
            console.error('Erro ao enviar os dados:', error);
        }
    };

    return (
        <div className="bg-[url('/bg-precadastro.png')] h-screen flex items-center justify-center overflow-hidden">
            <div className='md:justify-center flex flex-col justify-items-center md:max-w-7xl w-full gap-3 px-4 md:px-0'>
                <div className="max-w-xl mx-auto bg-white md:px-5 px-3 md:m-10 m-3 shadow-lg rounded-2xl">
                    <div className="flex justify-end items-center py-5">
                        <button type="button" className="">
                            <Link href='/'>
                                <MdClose size={30} />
                            </Link>
                        </button>
                    </div>

                    <div className="md:mb-7 mb-2 text-center flex items-center justify-center md:pt-5 pt-0">
                        <picture>
                            <img src="/logo-onano.png" className="px-4" alt="Logo Onano" />
                        </picture>
                    </div>

                    <p className="text-lg text-center py-5 text-blue-950">Faça seu login</p>

                    <form onSubmit={handleSubmit} className="relative">
                        <div className=''>
                            <p className="pb-2">Informe se você é:</p>

                            <div className="flex justify-around space-x-4">
                                <label
                                    className={`flex w-full items-center rounded-lg cursor-pointer border border-gray-300 ${selectedRole === 'aluno' ? 'text-black font-bold ' : 'bg-white text-gray-500'}`}
                                    onClick={() => handleRoleChange('aluno')}
                                >
                                    <div
                                        className={`flex items-center justify-center h-full w-10 mr-2 rounded-l-lg ${selectedRole === 'aluno'
                                            ? 'bg-gradient-to-b from-yellow-300 to-amber-400 px-3 py-2'
                                            : 'bg-white px-3 py-2 border-r border-gray-300'}`}
                                    >
                                        <FaCheck className={`h-6 w-6 ${selectedRole === 'aluno' ? 'text-white' : 'text-gray-500'}`} />
                                    </div>
                                    <span className={` ${selectedRole === 'aluno' ? 'text-black font-bold' : 'text-gray-500'}`}>
                                        Aluno
                                    </span>
                                </label>

                                <label
                                    className={`flex w-full items-center rounded-lg cursor-pointer border border-gray-300 ${selectedRole === 'professor' ? 'text-black font-bold' : 'bg-white text-gray-500'}`}
                                    onClick={() => handleRoleChange('professor')}
                                >
                                    <div
                                        className={`flex items-center justify-center h-full w-10 mr-2 rounded-l-lg ${selectedRole === 'professor' ? 'bg-gradient-to-b from-green-500 to-green-900 px-3 py-2'
                                            : 'bg-white px-3 py-2 border-r border-gray-300'}`}
                                    >
                                        <FaCheck className={`h-6 w-6 ${selectedRole === 'professor' ? 'text-white' : 'text-gray-500'}`} />
                                    </div>
                                    <span className={` ${selectedRole === 'professor' ? 'text-black font-bold' : 'text-gray-500'}`}>
                                        Professor
                                    </span>
                                </label>
                            </div>
                            {errors.role && <p className="text-red-500 text-xs md:mb-7 mb-2">{errors.role}</p>}
                        </div>

                        <div className="md:flex md:flex-row flex flex-col md:space-x-4 md:mt-7 mt-2">
                            <div className="flex flex-col w-full mb-4">
                                <div className="flex w-full">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <FaRegUser />
                                    </div>
                                    <input type="text" id="firstName" name="firstName" placeholder='Primeiro Nome'
                                        value={firstName} onChange={(e) => setFirstName(e.target.value)}
                                        onFocus={() => handleFocus('firstName')}
                                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-500" />
                                </div>
                                {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
                            </div>

                            <div className="flex flex-col w-full md:mb-7 mb-2">
                                <div className="flex w-full">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <FaRegUser />
                                    </div>
                                    <input type="text" id="lastName" name="lastName" placeholder='Último Nome'
                                        value={lastName} onChange={(e) => setLastName(e.target.value)}
                                        onFocus={() => handleFocus('lastName')}
                                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-500" />
                                </div>
                                {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName}</p>}
                            </div>
                        </div>

                        <div className="flex flex-col w-full md:mb-7 mb-2">
                            <div className="flex w-full">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                    <MdOutlineMailOutline />
                                </div>
                                <input type="email" id="email" name="email" placeholder='E-mail'
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    onFocus={() => handleFocus('email')}
                                    className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-500" />
                            </div>
                            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                        </div>

                        <div className="md:flex md:flex-row flex flex-col md:space-x-4 mb-0 md:mb-2">
                            <div className="flex flex-col w-full mb-2">
                                <div className="flex w-full">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <MdLockOutline />
                                    </div>
                                    <input type="password" id="password" name="password" placeholder='Criar Senha'
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                        onFocus={() => handleFocus('password')}
                                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-500" />
                                </div>
                                {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
                            </div>

                            <div className="flex flex-col w-full md:mb-7 mb-2">
                                <div className="flex w-full">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                        <MdLockOutline />
                                    </div>
                                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder='Confirmar Senha'
                                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                                        onFocus={() => handleFocus('confirmPassword')}
                                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg bg-gray-300 border border-gray-100 outline-none focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-500" />
                                </div>
                                {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword}</p>}
                                {errors.passwordMatch && <p className="text-red-500 text-xs">{errors.passwordMatch}</p>}
                            </div>
                        </div>

                        <div className="flex justify-between items-center md:mb-7 mb-2">
                            <Link href="/login" className="text-blue-950 underline">
                                Já sou cadastrado
                            </Link>
                            <button type="submit"
                                className="bg-gradient-to-b from-amber-400 to-amber-500 text-black font-medium px-10 py-2 rounded-lg hover:bg-amber-500">
                                Enviar
                            </button>
                        </div>

                        <p className="text-xs md:text-base text-blue-950 w-full flex md:py-5 py-2">
                            Ao cadastrar uma conta, você concorda com os
                            <Link href="/terms" className="text-blue-500 underline pl-2">
                                termos de uso
                            </Link>.
                        </p>
                    </form>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="colored"
            />
        </div>
    );
};