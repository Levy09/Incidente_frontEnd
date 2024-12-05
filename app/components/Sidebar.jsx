"use client"
import { usePathname, useRouter } from 'next/navigation'
import { HouseSimple , TrafficCone , ArrowRight} from '@phosphor-icons/react'

export default function SideBar() {
    const pathname = usePathname()
    const router = useRouter()

    function goToPage(page) {
        router.push(page)
    }

    console.info(pathname)

    return (
        <div className="gap-9 absolute left-0 min-h-screen min-w-18 p-2 flex justify-start items-center bg-blue-800
         text-white flex-col space-y-2">

            <div onClick={() => goToPage("/dashboard")} className={pathname === "/dashboard" ? "bg-white text-blue-800 p-1 rounded-md" : "cursor-pointer"}>
                {/* Aqui você pode adicionar um texto ou qualquer outro conteúdo */}
                <HouseSimple size={32} />
            </div>

            <div onClick={() => goToPage("/incidentes")} className={pathname === "/incidentes" ? "bg-white text-blue-800 p-1 rounded-md" : "cursor-pointer"}>
                {/* Aqui você pode adicionar um texto ou qualquer outro conteúdo */}
                
                <TrafficCone size={32} />


            </div>

            <div onClick={() => {
                if (window.confirm("Tem certeza de que deseja sair?")) {
                    goToPage("/")
                }
            }}
                className="cursor-pointer">
                {/* Aqui você pode adicionar um texto ou qualquer outro conteúdo */}
                <ArrowRight size={32} />

            </div>

        </div>
    )
}