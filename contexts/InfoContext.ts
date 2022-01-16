import { createContext } from "react";
import { Mob } from "../data/mobs"

export interface Character {
    job: number | null,
    lvl: number,
    str: number,
    dex: number,
    luk: number,
    int: number,
    att: number,
    magic: number,
    acc: number
}
export interface Skill {
    name: string,
    attack: number,
    mastery: number,
    element: Element
}
export enum Element {
    NEUTRAL = 0,
    HOLY = 1,
    ICE = 2,
    LIGHTNING = 3,
    FIRE = 4,
    POISON = 5,
}
export interface InfoContextInterface {
    character?: Character;
    skill?: Skill;
    monster?: Mob;
}

interface InfoStateManager {
    info: InfoContextInterface;
    setInfo: (arg: InfoContextInterface) => void,
    error: boolean,
    setError: (arg: boolean) => void
}
export const InfoContext = createContext<InfoStateManager>({ info: {}, setInfo: () => {}, error: false, setError: () => {} });