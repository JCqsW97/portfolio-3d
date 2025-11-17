import { rotate } from "three/tsl";
import Card from "../components/Card";
import { useRef } from "react";

const About = () => {
    const grid2container = useRef();
    return (
        <section className="c-space section-spacing">
            <h2 className="text-heading">About Me</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
                {/* Grid 1 */}
                <div className="flex items-end grid-default-color grid-1">
                    <img 
                        src="assets/coding-pov.png"
                        alt="coding pov" 
                        className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
                    />
                    <div className="z-10">
                        <p className="headtext">Hi, I'm Julien Cauquis</p>
                        <p className="subtext">
                            Over the last lorem ipsim sic dolor et anet
                        </p>
                    </div>
                    <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
                </div>
                {/* Grid 2 */}
                <div className="grid-default-color grid-2">
                    <div ref={grid2container} className="flex items-center justify-center w-full h-full">
                        <p className="flex items-end text-5xl text-gray-500">
                            CODE IS CRAFT
                        </p>
                        <Card 
                            text="TEST"
                            style={{ rotate: "75deg", top: "30%", left: "20%" }}
                            containerRef={grid2container}
                        />
                        <Card 
                            text="SOLID"
                            style={{ rotate: "-55deg", top: "10%", left: "90%" }}
                            containerRef={grid2container}
                        />
                        <Card 
                            text="LIQUID"
                            style={{ rotate: "7deg", top: "3%", left: "50%" }}
                            containerRef={grid2container}
                        />
                        <Card 
                            text="GAS"
                            style={{ rotate: "-75deg", top: "60%", left: "27%" }}
                            containerRef={grid2container}
                        />
                        <Card 
                            text="WATER"
                            style={{ rotate: "67deg", top: "30%", left: "70%" }}
                            containerRef={grid2container}
                        />
                        <Card 
                            image="assets/logos/csharp-pink.png"
                            style={{ rotate: "67deg", top: "30%", left: "70%" }}
                            containerRef={grid2container}
                        />
                        <Card 
                            image="assets/logos/dotnet-pink.png"
                            style={{ rotate: "-37deg", top: "30%", left: "79%" }}
                            containerRef={grid2container}
                        />
                    </div>
                </div>
                {/* Grid 3 */}
                <div className="grid-black-color grid-3"></div>
                {/* Grid 4 */}
                <div className="grid-special-color grid-4"></div>
                {/* Grid 5 */}
                <div className="grid-default-color grid-5"></div>
            </div>
        </section>
    );
};

export default About;