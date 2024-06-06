// Vista principal para personajes
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCharactersViewModel } from "../viewmodels/useCharactersViewModel";
import { CharacterCard } from "../components/CharacterCard";
import { Loading } from "../components/Loading";

const Characters: React.FC = () => {
    const pathname = usePathname();
    const idFilm = pathname.split("/")[2]
    
    // Llamar al gancho siempre, pero manejar los valores devueltos según sea necesario
    const { film, characters, isLoading } = useCharactersViewModel(idFilm as string || '');
    
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
            <h1>{film ? film.title : ""}</h1>
            <h2>Personajes</h2>
                {isLoading ? <Loading /> : (
                    <div className='container-characters'>
                        {characters.map((character, index) => (
                            <CharacterCard key={index} character={character} />
                        ))}
                    </div>
                )}
            </div>
        </header>
    );
};

export {Characters}