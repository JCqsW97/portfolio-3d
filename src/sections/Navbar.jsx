import { useState } from "react";
import { motion } from "motion/react";
import { HashLink } from 'react-router-hash-link';
import classNames from "classnames";

function Navigation({ onLinkClick }){
    return (
        <ul className="nav-ul">
            <li className="nav-li">
                <HashLink className="nav-link" to="/#about" onClick={onLinkClick}>About</HashLink>
            </li>
            <li className="nav-li">
                <HashLink className="nav-link" to="/#projects" onClick={onLinkClick}>Projects</HashLink>
            </li>
            <li className="nav-li">
                <HashLink className="nav-link" to="/#contact" onClick={onLinkClick}>Contact</HashLink>
            </li>
        </ul>
    );
};

const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false);
    return (
        <div className={`fixed inset-x-0 z-20 w-full ${!isOpen ? 'backdrop-blur-lg bg-primary/40' : ''}`}>
            <div className="mx-auto c-space max-w-7xl">
                <div className="flex items-center justify-between py-2 sm:py-0">
                    <a href="/" className="text_xl font-bold transition-colors text-neutral-400 hover:text-white">
                        Julien
                    </a>
                    <button onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden">
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} className="w-6 h-6 z-40" alt="toggle" />
                    </button>
                    <nav className="hidden sm:flex">
                        <Navigation />
                    </nav>
                </div>
            </div>
            {isOpen && (
                <div
                    className="backdrop-blur-lg bg-primary/40"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        zIndex: 30,
                        backgroundColor: 'color-mix(in oklab, var(--color-primary) /* #030412 */ 40%, transparent)',
                    }}
                    onClick={() => {
                    setIsOpen(false);
                    }}
                >                    
                <motion.div 
                        className="block overflow-hidden text-center sm:hidden"
                        initial={{ opacity: 0, x: -10}}
                        animate={{ opacity: 1, x: 0}}
                        style={{ maxHeight: "100vh"}}
                        transition={{ duration: 1 }}
                        //onClick={(e) => e.stopPropagation()}
                >
                    <nav className="pb-5" >
                        <Navigation onLinkClick={() => (setIsOpen(false))} />
                    </nav>
                </motion.div>
                </div>
            )}
        </div>
    );
};

export default Navbar