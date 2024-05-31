
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";

export default function MuiModal({ children, header, headerClass, modalButton, buttonCss }) {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <button type="button" className={buttonCss} onClick={handleClickOpen("paper")}>
                {modalButton}
            </button>

            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
            >
                {header && <DialogTitle id="scroll-dialog-title" className={`py-2 bg-bgNeel text-textWhite rounde-t ${headerClass}`}>
                    {header}
                </DialogTitle>}

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
        </>
    );
}