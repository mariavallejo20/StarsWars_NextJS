import React from 'react'
// @ts-ignore
import Star_Wars_Logo from '../../img/Star_Wars_Logo.png'
import Link from 'next/link'
import Image from 'next/image'

function Start()
{
    return(
        <header className="App-header">
            <h1 className="title">Stars Wars</h1>
            
            <Image src={Star_Wars_Logo} alt="Start Wars" className="img-home" />
            <Link href="/films" className="btn-search">Entrar</Link> 
        </header>
    )
}

export {Start}