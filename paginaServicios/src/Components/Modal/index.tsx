import { motion } from "framer-motion";
import Backdrop from "../backdrop";
import { IModalProps } from "../../Interfaces/IModal";
import "./modal.css";

const dropIn={
    hidden:{
        y: "-100vh",
        opacity: 0
    },
    visible:{
        y: "0",
        opacity: 1,
        transition:{
            duration: 0.1,
            type: "spring",
            damping: 0,
            stiffness: 500,

        }
    },
    exit:{
        y:"100vh",
        opacity: 0
    },



};

const Modal = (props: IModalProps) => {
    return(
    <Backdrop onClick={props.handleClose}>
        <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
         <p>{props.text}</p>
         <button onClick={props.handleClose}>Close</button>   
        </motion.div>
    </Backdrop>
    );
};

export default Modal;

