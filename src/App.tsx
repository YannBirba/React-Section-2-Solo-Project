import React, { useEffect } from "react";
import Travel from "./types/travel";
import axios from "axios";
import Header from "./components/Header";
import TravelCard from "./components/TravelCard";

const App: React.FC = () => {
    const [travels, setTravels] = React.useState<Travel[] | null>(null);

    const fetchTravels = async () => {
        await axios
            .get<{ data: Travel[] }>("/data.json")
            .then((res) => {
                setTravels(() => res.data.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        fetchTravels();
    }, [travels]);

    return (
        <div className="bg-gray-200 h-screen flex justify-center items-center selection:bg-projectOrange selection:text-text">
            <div className="max-w-[550px] flex flex-col gap-5 text-text bg-white">
                <Header />
                <main className="px-8">
                    {travels &&
                        travels.map((travel) => (
                            <>
                                <TravelCard key={travel.id} {...travel} />
                                <hr />
                            </>
                        ))}
                </main>
            </div>
        </div>
    );
};

export default App;
