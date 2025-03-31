export interface IModalProps{
    text?: string;
    handleClose: (e:any) => void;
    modalOpen?: boolean;
    children?: React.ReactNode
};