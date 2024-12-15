"use client"
import { usePathname, useRouter } from 'next/navigation'
import { HouseSimple, TrafficCone, ArrowRight, Gear } from '@phosphor-icons/react'

export default function SideBar() {
    const pathname = usePathname()
    const router = useRouter()

    function goToPage(page) {
        router.push(page)
    }

    return (
        <div className="w-16 min-h-screen bg-gradient-to-b from-blue-800 to-blue-600 text-white shadow-xl rounded-xl p-4 flex flex-col items-center space-y-6">
            
            {/* Home */}
            <div
                onClick={() => goToPage("/dashboard")}
                className={`cursor-pointer flex flex-col items-center p-3 transition-all duration-200 ease-in-out transform hover:bg-blue-700 rounded-lg hover:scale-105 ${pathname === "/dashboard" ? "bg-blue-700 scale-105" : ""}`}
            >
                <HouseSimple size={32} />
                <span className="text-xs font-semibold mt-2 hidden group-hover:block">Home</span>
            </div>
            
            {/* Incidentes */}
            <div
                onClick={() => goToPage("/incidentes")}
                className={`cursor-pointer flex flex-col items-center p-3 transition-all duration-200 ease-in-out transform hover:bg-blue-700 rounded-lg hover:scale-105 ${pathname === "/incidentes" ? "bg-blue-700 scale-105" : ""}`}
            >
                <TrafficCone size={32} />
                <span className="text-xs font-semibold mt-2 hidden group-hover:block">Incidentes</span>
            </div>

            {/* Configurações */}
            <div
                onClick={() => goToPage("/configuracoes")}
                className={`cursor-pointer flex flex-col items-center p-3 transition-all duration-200 ease-in-out transform hover:bg-blue-700 rounded-lg hover:scale-105 ${pathname === "/configuracoes" ? "bg-blue-700 scale-105" : ""}`}
            >
                <Gear size={32} />
                <span className="text-xs font-semibold mt-2 hidden group-hover:block">Configurações</span>
            </div>

            {/* Sair */}
            <div
                onClick={() => {
                    if (window.confirm("Tem certeza de que deseja sair?")) {
                        goToPage("/")
                    }
                }}
                className="cursor-pointer flex flex-col items-center p-3 transition-all duration-200 ease-in-out transform hover:bg-red-600 rounded-lg hover:scale-105"
            >
                <ArrowRight size={32} />
                <span className="text-xs font-semibold mt-2 hidden group-hover:block">Sair</span>
            </div>
        </div>
    )
}