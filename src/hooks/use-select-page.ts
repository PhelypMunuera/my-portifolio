import { useContext } from "react";
import { SelectPageContext } from "../context/page";

export function useSelec() {
    const context = useContext(SelectPageContext)
    if(!context) throw new Error('context null')

    return context
} 