// Vista principal para personajes
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlanetsViewModel } from "../viewmodels/usePlanetsViewModel";
import { PlanetCard } from "../components/PlanetCard";
import { Loading } from "../components/Loading";

const Planets: React.FC = () => {
    const pathname = usePathname();
    const idFilm = pathname.split("/")[2]
    
    // Llamar al gancho siempre, pero manejar los valores devueltos según sea necesario
    const { film, planets, isLoading } = usePlanetsViewModel(idFilm || '');
    
    return (
        <header className="App-header">
        <h1 className="title">Stars Wars</h1>
        <div className='characters'>
            <button type="button" className='back-home'>
                <Link href="/">Home</Link>
            </button>
            <button type="button" className='back'>
                <Link href="/films">Back</Link>
            </button>
            <h1>{film ? film.title : "Loading..."}</h1>
            <h2>Planetas</h2>
                {isLoading ? <Loading /> : (
                    <div className='container-characters'>
                        {planets.map((planet, index) => (
                            <PlanetCard key={index} planet={planet} />
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export {Planets}