"use client"
import Image from "next/image";
import "./yuri.css";
import {useState} from "react";

const characters = [
    "Agnes Digital",
    "Mejiro Dober"
];

export default function Yuri() {
    const [firstCharacter, setFirstCharacter] = useState("Agnes Digital");
    const [secondCharacter, setSecondCharacter] = useState("Mejiro Dober");

    return (
        <>
            <nav className="flex justify-center  items-center bg-white text-black p-5 w-11/12 m-5 rounded-lg">
                <h1 className="text-2xl">Uma Yuri</h1>
            </nav>
            <main className="flex flex-1 flex-col items-center justify-center text-white w-full h-full p-6 md:p-36">
                {/* <select className="text-lg" onSelect={() => setFirstCharacter("Agnes Digital")}>
                    {characters.map((character) => (
                        <option key={character} value={character} selected={firstCharacter == character}>{character}</option>
                    ))}
                </select>
                <Image src={"https://danbooru.donmai.us/posts/random.json?tags=rating:general&login=" + process.env.DANB_LOGIN + "&api_key=" + process.env.DANB_KEY} alt={"Yuri"} width={400} height={400} className="my-5" />
                <select className="text-lg" onSelect={(e) => setSecondCharacter(e)}>
                    {characters.map((character) => (
                        <option key={character} value={character} selected={secondCharacter == character}>{character}</option>
                    ))}
                </select> */}
            </main>
        </>
    );
}
