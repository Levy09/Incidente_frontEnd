"use client"

import LoginForm from './components/LoginForms.jsx';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function Home() {
  const userRouter = useRouter();
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const handleLogin = (username, password) => {
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Usuário:', username);
    console.log('Senha:', password);
    // Exemplo de autenticação fictícia
    if (username === 'admin' && password === 'senha123') {
      setFeedbackMessage('Login bem-sucedido!');
      setTimeout(() => {
        userRouter.push('/dashboard');
      },1000)
      
    } else {
      setFeedbackMessage('Usuário ou senha incorretos.');
    }
  };


  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center">
      <div className=" w-full h-full max-w-screen-lg grid grid-cols-2">
        <aside className='flex justify-center items-center'><img src="/login.svg" alt="manOnTopPiggyBank" /></aside>
        <main className='flex justify-center items-center'>
          <div  className='w-full'><LoginForm onLogin={handleLogin} feedbackMessage={feedbackMessage} /></div></main>
      </div>
    </div>

  )
} 