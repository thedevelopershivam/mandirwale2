import React, { Children } from 'react'

export function H1({ className, children }) {
    return (
        <h1 className={`text-[calc(30px+.5vw)] font-medium ${className}`}>
            {children}
        </h1>
    )
}


export function H2({ className, children }) {
    return (
        <h1 className={`text-[calc(25px+.4vw)] font-medium ${className}`}>
            {children}
        </h1>
    )
}

export function H3({ className, children }) {
    return (
        <h1 className={`text-[calc(20px+.3vw)] font-medium ${className}`}>
            {children}
        </h1>
    )
}

