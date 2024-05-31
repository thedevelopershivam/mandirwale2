import React from 'react'

function FormatedDate(date) {
    const userDate = new Date(date);

    const formatedDateString = userDate.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })

    const formatedTimeString = userDate.toLocaleDateString('en-GB', {
        hour: 'numeric',
        minute: '2-digit',
    })

    const newDate = ` ${formatedTimeString}`;

    return newDate;
}

export default FormatedDate