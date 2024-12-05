
// components/LoginForm.js
import React, { useState } from 'react';

const LoginForm = ({ onLogin,feedbackMessage }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    // Validação simples
    if (!username || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Chama a função onLogin com os dados do formulário
    onLogin(username, password);
  };

  return (
    <div className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-md">
      <h2 className=" text-blue-500 text-2xl font-bold mb-4 text-center">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 text-black border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 text-black border border-gray-300 rounded "
          />
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {feedbackMessage && <div className="text-blue-500 mb-4">{feedbackMessage}</div>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;