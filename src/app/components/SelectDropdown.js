"use client"
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled, lighten, darken } from '@mui/system';


const GroupHeader = styled('div')(({ theme }) => ({
    position: 'sticky',
    height: "30px",
    top: '-8px',
    padding: '4px 10px',
    color: "#fff",
    backgroundColor: "#001F3F"
}));

const GroupItems = styled('ul')({
    padding: 0,
});

export default function SelectDropdown({ option, label, onChange, value }) {


    const options = option.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });

    return (
        <Autocomplete
        // value={value}
            onChange={(e, nv)=> onChange(nv, label)}
            id="grouped-demo"
            sx={{ p: '0px 0px', m: "0px" }}
            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
            groupBy={(option) => option.firstLetter}
            getOptionLabel={(option) => option.title?.toUpperCase()}
            renderInput={(params) => <TextField {...params} className="capitalize" label={label}/>
            
        }
            renderGroup={(params) => (
                <li className='capitalize' key={params.key}>
                    <GroupHeader>
                        {params.group}
                    </GroupHeader>
                    <GroupItems>
                        {params.children}
                    </GroupItems>
                </li>
            )}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
