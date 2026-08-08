import {  createContext, useState, type ReactNode } from "react";

type createContextType = {
    currentPage: string;
    setCurrentPage: (Select: string) => void;
} 

const SelectPageContext = createContext<createContextType | null>(null);

type SelectPageProps = {
    children: ReactNode;
}

function SelectPage({children}: SelectPageProps ) {
    const [currentPage, setCurrentPage] = useState('home');

    return(
        <SelectPageContext.Provider value={{currentPage, setCurrentPage}}>
            {children}
        </SelectPageContext.Provider>
    )
} 

export {SelectPageContext, SelectPage}