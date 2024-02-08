"use client";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '../Button';


function TabCell({ children }) {
    return (
        <TableCell className="text-sm font-semibold bg-bgNeel text-textWhite">
            {children}
        </TableCell>
    )
}

const rows = [
    { name: 'India', code: 'IN', population: 1324171354, size: 3287263 },
    { name: 'China', code: 'CN', population: 1403500365, size: 9596961 },
    { name: 'Italy', code: 'IT', population: 60483973, size: 301340 },
    { name: 'United State', code: 'US', population: 327167434, size: 9833520 },
    { name: 'Canada', code: 'CA', population: 37602103, size: 9984670 },
    { name: 'Australia', code: 'AU', population: 25475400, size: 7692024 },
    { name: 'Germany', code: 'DE', population: 83019200, size: 357578 },
    { name: 'Ireland', code: 'IE', population: 4857000, size: 70273 },
    { name: 'Mexico', code: 'MX', population: 126577691, size: 1972550 },
    { name: 'Japan', code: 'JP', population: 126317000, size: 377973 },
    { name: 'France', code: 'FR', population: 67022000, size: 640679 },
    { name: 'United Kingdocode', code: "GB", population: 67545757, size: 242495 },
    { name: 'Russia', code: 'RU', population: 146793744, size: 17098246 },
    { name: 'Nigeria', code: 'NG', population: 200962417, size: 923768 },
    { name: 'Brazil', code: 'BR', population: 210147125, size: 8515767 },
];

export default function UserTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <section className=' w-full mr-4'>
            <div className='flex justify-end my-4'>
                <Button className="max-w-[200px]"> Create </Button>
            </div>

            <section className="flex flex-col w-full max-h-[450px]">
                <TableContainer className='max-h-[450px] border relative'>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                <TabCell>Name</TabCell>
                                <TabCell>ISO Code</TabCell>
                                <TabCell>Population</TabCell>
                                <TabCell>Size</TabCell>
                                <TabCell>Density</TabCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            <TableCell> {row.name} </TableCell>
                                            <TableCell> {row.code} </TableCell>
                                            <TableCell> {row.population} </TableCell>
                                            <TableCell> {row.size} </TableCell>
                                            <TableCell> {Math.ceil(row.population / row.size)} </TableCell>
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    className="absolute bottom-0 right-0"
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </section>
        </section>

    );
}