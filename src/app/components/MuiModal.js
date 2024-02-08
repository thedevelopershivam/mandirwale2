import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function MuiModal({ children, header }) {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <React.Fragment>
            <Button className="w-full rounded-md bg-butSafron text-textWhite py-2 shadow-shadowDownL hover:shadow-none duration-200 max-w-[150px] hover:bg-bgSafron" onClick={handleClickOpen('paper')}>Create</Button>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
            >
                {header && <DialogTitle id="scroll-dialog-title" className='py-2 bg-bgNeel text-textWhite rounde-t '>{header}</DialogTitle>}

                <DialogContent className='w-full max-w-[95%] xs:min-w-[430px] sm:min-w-[500px] md:min-w-[550px] border-2 border-transparent'>
                    <div
                        className='pt-4 min-w-full'
                        id="scroll-dialog-description"
                        tabIndex={-1}
                    >
                        {children}
                    </div>
                </DialogContent>
                {/* <DialogActions className="bg-bgSafron py-1">
                    <Button className="text-white" onClick={handleClose}>Close</Button>
                </DialogActions> */}
            </Dialog>
        </React.Fragment>
    );
}