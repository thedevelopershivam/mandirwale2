import React, { useMemo } from 'react'
import dynamic from "next/dynamic";

export default function TextEditor({onChange, value=null}) {
    const DynamicTextEditor = useMemo(() => {
        return dynamic(() => import("./TextEditors"), {
            loading: () => <p>loading...</p>,
            ssr: false,
        });
    }, []);
    return (
        <main>
            <DynamicTextEditor onChange={onChange} value={value} />
        </main>
    )
}

