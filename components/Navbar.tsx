import Link from 'next/link'
import React from 'react'
import Image from "next/image";
import { NavLinks } from "@/constant";
import AuthProviders from './AuthProviders';

const Navbar = async () => {
    const session = {}
    
    return (
        <nav className='flexBetween navbar'>
            <div className='flex-1 flexStart gap-10'>
                <Link href='/'>
                    <Image
                        src='/logo.jpg'
                        width={86}
                        height={23}
                        alt='logo'
                    />
                </Link>
                <ul className='xl:flex hidden text-small gap-7'>
                    {/* {NavLinks.map((link) =>
                    {
                        console.log(link); // print link
                        return(
                            <Link href={link.href} key={link.text}>
                                {link.text}
                            </Link>
                        );
                    })} */}
                    {NavLinks.map((link) => (
                        <Link href={link.href} key={link.text}>
                            {link.text}
                        </Link>
                    ))}
                </ul>
            </div>

            <div className='flexCenter gap-4'>
                {session? (
                    <>
                        {/* <ProfileMenu session={session} /> */}

                        <Link href="/create-project">
                            {/* <Button title='Share work' /> */}
                        </Link>
                    </>
                ) : (
                    <AuthProviders />
                )}
            </div>
        </nav>
  )
}

export default Navbar

function getCurrentUser() {
    throw new Error('Function not implemented.');
}
