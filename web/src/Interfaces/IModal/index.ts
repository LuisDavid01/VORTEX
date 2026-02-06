/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactElement } from "react";

export interface IModalProps{
    body?: ReactElement;
    text?: string;
    container?: string;
    handleClick?: (e: any) => void;
    modalOpen?: boolean;
    children?: React.ReactNode;
    withTransition?: boolean;
    transitionDuration?: number;
    transitionType?: 'fade' | 'scale' | 'slideDown';
};