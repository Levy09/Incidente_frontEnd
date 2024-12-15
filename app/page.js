"use client"

import LoginForm from './components/LoginForms.jsx';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
  const userRouter = useRouter();
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleLogin = async (username, password) => {
    // Exemplo de login real com backend
    try {
      
      
      const response = await fetch('http://localhost:3003/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Usuário ou senha incorretos.');
      }

      const data = await response.json();
      const { token } = data;

      // Armazenar o token JWT no localStorage ou cookie (aqui usamos localStorage)
      localStorage.setItem('token', token);

      setFeedbackMessage('Login bem-sucedido!');
      
      setTimeout(() => {
        userRouter.push('/dashboard');  // Redirecionar para o dashboard após o login
      }, 1000);
    } catch (error) {
      setFeedbackMessage(error.message);
    }
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center">
      <div className="w-full h-full max-w-screen-lg grid grid-cols-2">
        <aside className="flex justify-center items-center">
          <img src="/login.svg" alt="manOnTopPiggyBank" />
        </aside>
        <main className="flex justify-center items-center">
          <div className="w-full">
            <LoginForm onLogin={handleLogin} feedbackMessage={feedbackMessage} />
          </div>
        </main>
      </div>
    </div>
  );
}