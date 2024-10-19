"use client"
import React , {ReactNode} from'react';
import Link ,{ LinkProps } from 'next/link';



const TransitionLink = ({ 
    children, 
    href,
     ...props 
    }) => {
    return(
        <Link href={href} {...props}>
            {children}
        </Link>
    )
}

export default TransitionLink;
