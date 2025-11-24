import { rotate } from "three/tsl";
import Card from "../components/Card";
import { useRef } from "react";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { FrameWorks } from "../components/FrameWorks";

const About = () => {
    const grid2container = useRef();
    const coloredText = "blue";
    return (
        <section 
            id="about"
            className="c-space section-spacing"
        >
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
                            With a deep interest in <span className="text-amber-300">cutting-edge technologies</span> like virtual reality, artificial intelligence, digital twins, and robotics, <br /> my driving force is <span className="text-amber-300">helping individuals</span> improve their outcomes and communication through innovative technologies.
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
                <div className="grid-black-color grid-3">
                    <div className="z-10 w-[50%]">
                        <p className="headtext">Time Zone</p>
                        <p className="subtext">I'm based in France, and open to remote work worldwide</p>
                    </div>
                    <figure className="absolute left-[30%] top-[10%]">
                        <Globe />
                    </figure>
                </div>
                {/* Grid 4 */}
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">Do you want to get in touch?</p>
                        <CopyEmailButton />
                    </div>
                </div>
                {/* Grid 5 */}
                <div className="grid-default-color grid-5">
                    <div className="z-10 h-full w-[60%] flex flex-col justify-between">
                        <p className="headtext">Tech Stack</p>
                        <p className="subtext">                            
                            I'm a Software <span className="text-amber-300">Engineer</span> and Project <span className="text-amber-300">Manager</span>, working at the crossroads of technology, science and learning. 
                        </p>
                        <p className="subtext">                            
                            I bring a solid expertise in <span className="text-amber-300">immersive technologies</span> and real-world <span className="text-amber-300">project management</span>. 
                        </p>
                    </div>
                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[55%] md:scale-125">
                        <FrameWorks />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;