import React from "react";
import { IoEarthSharp } from "react-icons/io5";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
    return (
        <header className="bg-projectOrange text-white flex gap-2 text-sm min-h-[55px] items-center justify-center">
            <IoEarthSharp size={24} /> my travel journal.
        </header>
    );
};

export default Header;
