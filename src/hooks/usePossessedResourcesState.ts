import React, {useState} from "react";
import { PossessedResources } from "../features/PossessedResources";

type ResourcesKind = "Wool" | "Wood" | "Wheat" | "Brick" | "Ore";

type InvestKind = "Road" | "Frontier" | "Urbanization" | "Development";

type Callback = ()=>void;

const usePossessedResourcesState: () => [
    PossessedResources, (resourcesKind: ResourcesKind)=>Callback, (resourcesKind: ResourcesKind)=>Callback, (investKind: InvestKind)=>Callback, Callback
] = () => {
    const [possessedResources, setPossessedResources] = useState(new PossessedResources());
    const increment = (resourcesKind: ResourcesKind) => {
        switch(resourcesKind){
            case "Wool":
                return () => setPossessedResources((res) => res.incrementWool());
                break;
            case "Wood":
                return () => setPossessedResources((res) => res.incrementWood());
                break;
            case "Wheat":
                return () => setPossessedResources((res) => res.incrementWheat());
                break;
            case "Brick":
                return () => setPossessedResources((res) => res.incrementBrick());
                break;
            case "Ore":
                return () => setPossessedResources((res) => res.incrementOre());
                break;
        }
    };
    const decrement = (resourcesKind: ResourcesKind) => {
        switch(resourcesKind){
            case "Wool":
                return () => setPossessedResources((res) => res.decrementWool());
                break;
            case "Wood":
                return () => setPossessedResources((res) => res.decrementWood());
                break;
            case "Wheat":
                return () => setPossessedResources((res) => res.decrementWheat());
                break;
            case "Brick":
                return () => setPossessedResources((res) => res.decrementBrick());
                break;
            case "Ore":
                return () => setPossessedResources((res) => res.decrementOre());
                break;
        }
    };
    const reset = () => {
        setPossessedResources(() => new PossessedResources());
    };

    const invest = (investKind: InvestKind) => {
        switch(investKind) {
            case "Road":
                return () => setPossessedResources((res) => res.investToRoad());
            case "Frontier":
                return () => setPossessedResources((res) => res.investToFrontier());
            case "Urbanization":
                return () => setPossessedResources((res) => res.investToUrbanization());
            case "Development":
                return () => setPossessedResources((res) => res.investToDevelopment());
        }
    }

    return [possessedResources, increment, decrement, invest, reset];
}

export {usePossessedResourcesState}