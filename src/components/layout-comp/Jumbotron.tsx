import React from 'react'

export function Jumbotron({ children }: { children: React.ReactNode }) {
    return (
        <section className="flexCenter w-full flex-col py-[3rem]">
            <div className="get-app">
                <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-6 ">
                    {children}
                </div>
            </div>
        </section>
    )
}

export function JumbotronPink({ children }: { children: React.ReactNode }) {
    return (
        <section className="flexCenter w-full flex-col py-[3rem]">
            <div className="get-app">
                <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-6 ">
                    {children}
                </div>
            </div>
        </section>
    )
}
