import React, {useState} from "react";
import { PossessedResources } from "../features/PossessedResources";

type ResourcesKind = "Wool" | "Wood" | "Wheat" | "Brick" | "Ore";

enum ConsumeKind {
    Road,
};

const usePossessedResourcesState: () => [PossessedResources, (resourcesKind: ResourcesKind)=>void, (resourcesKind: ResourcesKind)=>void, ()=>void] = () => {
    const [possessedResources, setPossessedResources] = useState(new PossessedResources());
    const increment = (resourcesKind: ResourcesKind) => {
        switch(resourcesKind){
            case "Wool":
                setPossessedResources((res) => res.incrementWool());
                break;
            case "Wood":
                setPossessedResources((res) => res.incrementWood());
                break;
            case "Wheat":
                setPossessedResources((res) => res.incrementWheat());
                break;
            case "Brick":
                setPossessedResources((res) => res.incrementBrick());
                break;
            case "Ore":
                setPossessedResources((res) => res.incrementOre());
                break;
        }
    };
    const decrement = (resourcesKind: ResourcesKind) => {
        switch(resourcesKind){
            case "Wool":
                setPossessedResources((res) => res.decrementWool());
                break;
            case "Wood":
                setPossessedResources((res) => res.decrementWood());
                break;
            case "Wheat":
                setPossessedResources((res) => res.decrementWheat());
                break;
            case "Brick":
                setPossessedResources((res) => res.decrementBrick());
                break;
            case "Ore":
                setPossessedResources((res) => res.decrementOre());
                break;
        }
    };
    const reset = () => {
        setPossessedResources(() => new PossessedResources());
    };

    return [possessedResources, increment, decrement, reset];
}

export {usePossessedResourcesState}