import {createContext} from "react";

export const UserContext = createContext({});

export function UserContextProvider ({Children}) {
    return (<Children/>)
}