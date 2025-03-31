import { motion } from "framer-motion";
import { IBackdropProps } from "../../Interfaces/IBackdrop";
const Backdrop = (props: IBackdropProps) =>{
    return(
        <motion.div
        className="backdrop"
        onClick={props.onClick}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            {props.children}
        </motion.div>
    );
}

export default Backdrop;