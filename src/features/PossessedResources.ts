
class PossessedResources {
    readonly wool: number;
    readonly wood: number;
    readonly wheat: number;
    readonly brick: number;
    readonly ore: number;

    constructor(wool: number, wood: number, wheat: number, brick: number, ore: number){
        this.wool = wool;
        this.wood = wood;
        this.wheat = wheat;
        this.brick = brick;
        this.ore = ore;
    }

    incrementWool(this: PossessedResources): PossessedResources {
        return new PossessedResources(
            this.wool + 1,
            this.wood,
            this.wheat,
            this.brick,
            this.ore
        );
    }
    
    incrementWood(this: PossessedResources): PossessedResources {
        return new PossessedResources(
            this.wool,
            this.wood + 1,
            this.wheat,
            this.brick,
            this.ore
        );
    }
    
    incrementWheat(this: PossessedResources): PossessedResources {
        return new PossessedResources(
            this.wool,
            this.wood,
            this.wheat + 1,
            this.brick,
            this.ore
        );
    }
    
    incrementBrick(this: PossessedResources): PossessedResources {
        return new PossessedResources(
            this.wool,
            this.wood,
            this.wheat,
            this.brick + 1,
            this.ore
        );
    }
    
    incrementOre(this: PossessedResources): PossessedResources {
        return new PossessedResources(
            this.wool,
            this.wood,
            this.wheat,
            this.brick,
            this.ore + 1
        );
    }
    
    decrementWool(this: PossessedResources): PossessedResources {
        if(this.wool <= 0){
            return this;
        }
        return new PossessedResources(
            this.wool - 1,
            this.wood,
            this.wheat,
            this.brick,
            this.ore
        );
    }
    
    decrementWood(this: PossessedResources): PossessedResources {
        if(this.wood <= 0){
            return this;
        }
        return new PossessedResources(
            this.wool,
            this.wood - 1,
            this.wheat,
            this.brick,
            this.ore
        );
    }
    
    decrementWheat(this: PossessedResources): PossessedResources {
        if(this.wheat <= 0){
            return this;
        }
        return new PossessedResources(
            this.wool,
            this.wood,
            this.wheat - 1,
            this.brick,
            this.ore
        );
    }
    
    decrementBrick(this: PossessedResources): PossessedResources {
        if(this.brick <= 0){
            return this;
        }
        return new PossessedResources(
            this.wool,
            this.wood,
            this.wheat,
            this.brick - 1,
            this.ore
        );
    }
    
    decrementOre(this: PossessedResources): PossessedResources {
        if(this.ore <= 0){
            return this;
        }
        return new PossessedResources(
            this.wool,
            this.wood,
            this.wheat,
            this.brick,
            this.ore - 1
        );
    }

    setToZero(this: PossessedResources): PossessedResources{
        return new PossessedResources(0, 0, 0, 0, 0);
    }


}


export {PossessedResources}