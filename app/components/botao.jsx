import { PlusCircle } from "@phosphor-icons/react";

// Componente do botão reutilizável
function NovoIncidenteButton({ onClick, label })  {
    return (
      <button
        onClick={onClick}
        className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded shadow-md transition-all duration-300"
      >
        <PlusCircle size={24} />
        <span className="text-sm font-medium">{label}</span>
      </button>
    );
  }
  export default NovoIncidenteButton