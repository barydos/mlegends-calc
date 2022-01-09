import { createContext } from "react";
import { Mob } from "../data/mobs"

interface Character {

}
interface Skills {

}
export interface InfoContextInterface {
    character?: Character;
    skills?: Skills;
    monster?: Mob;
}

interface InfoStateManager {
    info: InfoContextInterface;
    setInfo: (arg: InfoContextInterface) => void
}
export const InfoContext = createContext<InfoStateManager>({ info: {}, setInfo: () => {}});