import React, { useMemo, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
// import { TableModule } from 'quill-table';
export default function TextEditors({onChange, value}) {
    
    const modules = useMemo(() => {
        return {
            toolbar: [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
                [{ size: [] }, { font: [] }],
                ['link', 'image', 'video'],
                ['bold', 'italic', 'underline', 'strike'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'script': 'sub' }, { 'script': 'super' }],
                // [{ 'indent': '-1' }, { 'indent': '+1' }],
                // [{ 'direction': 'rtl' }],
                [{ 'color': [] }, { 'background': [] }],
                [{ 'align': [] }],
                // [{ "table": []}],
                ['clean'],

            ],
            
        }
    }, [])

    return (
        <div>
            <ReactQuill
                modules={modules}
                theme="snow"
                value={value}
                onChange={(e) => onChange(e)}
            ></ReactQuill>
        </div>
    );
}