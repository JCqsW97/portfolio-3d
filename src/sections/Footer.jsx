import { mySocials } from "../constants";

const Footer = () => {
    return (
        <section className="flex flex-wrap justify-between items-center gap-5 pb-3 text-sm text-neutral-400">
            <div className="mb- bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
            <div className="gap-2 w-[30%] text-left">
                <p>Privacy</p>
            </div>
            <div className="flex gap-3">
                {mySocials.map((social, index) => (
                    <a href={social.href} key={index}>
                        <img src={social.icon} className="w-5 h-5" alt={social.name} />
                    </a>
                ))}
            </div>
            <div className="gap-2 w-[30%] text-right">
                <p>© 2025 Julien Cauquis. All rights reserved.</p>
            </div>
        </section>
    );
};

export default Footer;