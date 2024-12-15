"use client";

import { useState } from "react";
import SideBar from "../components/Sidebar.jsx";
import NovoIncidenteButton from "../components/botao.jsx";
import Modal from "../components/Modal.jsx";

export default function Incidentes() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    rede: "",
    horarioCriacao: "",
  });

  // Redes disponíveis
  const redes = ["Pedra Branca", "Aldeota", "Guararapes", "Iguape", "Messejana", "Via Sul"];

  // Função para abrir o modal e registrar horário de criação
  const handleNovoIncidente = () => {
    setFormData({
      ...formData,
      horarioCriacao: new Date().toLocaleString("pt-BR"), // Horário atual formatado
    });
    setIsModalOpen(true);
  };

  // Fechar modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Atualizar valores do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submeter formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do incidente:", formData);
    // Aqui você pode enviar os dados para uma API
    handleCloseModal();
  };

  return (
    <div className="flex bg-gray-200 min-h-screen">
      <SideBar />
      <main className="flex-1 p-4 ml-1 bg-gray-100 min-h-screen">
        <div className="flex justify-start p-4">
          <NovoIncidenteButton label={"Novo Incidente"} onClick={handleNovoIncidente} />
        </div>

        {/* Modal */}
        {isModalOpen && (
          <Modal onClose={handleCloseModal}>
            <h2 className="text-xl font-bold mb-4">Novo Incidente</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
                  Título
                </label>
                <input
                  type="text"
                  id="titulo"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Digite o título do incidente"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
                  Descrição
                </label>
                <textarea
                  id="descricao"
                  name="descricao"
                  rows="4"
                  value={formData.descricao}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Descreva o incidente"
                ></textarea>
              </div>

              <div className="mb-4">
                <label htmlFor="rede" className="block text-sm font-medium text-gray-700">
                  Rede
                </label>
                <select
                  id="rede"
                  name="rede"
                  value={formData.rede}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled>
                    Selecione uma rede
                  </option>
                  {redes.map((rede) => (
                    <option key={rede} value={rede}>
                      {rede}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <p className="text-sm text-gray-700">
                  <strong>Horário de Criação:</strong> {formData.horarioCriacao}
                </p>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded"
                  onClick={handleCloseModal}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                  Salvar
                </button>
              </div>
            </form>
          </Modal>
        )}
      </main>
    </div>
  );
}