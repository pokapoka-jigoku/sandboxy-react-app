
class PossessedResources {
    constructor(
        readonly wool: number = 0,
        readonly wood: number = 0,
        readonly wheat: number = 0,
        readonly brick: number = 0,
        readonly ore: number = 0
    ){}

    incrementWool(): PossessedResources {
        return new PossessedResources(
            this.wool + 1,
            this.wood,
            this.wheat,
            this.brick,
            this.ore
        );
    }
    
    incrementWood(): PossessedResources {
        return new PossessedResources(
            this.wool,
            this.wood + 1,
            this.wheat,
            this.brick,
            this.ore
        );
    }
    
    incrementWheat(): PossessedResources {
        return new PossessedResources(
            this.wool,
            this.wood,
            this.wheat + 1,
            this.brick,
            this.ore
        );
    }
    
    incrementBrick(): PossessedResources {
        return new PossessedResources(
            this.wool,
            this.wood,
            this.wheat,
            this.brick + 1,
            this.ore
        );
    }
    
    incrementOre(): PossessedResources {
        return new PossessedResources(
            this.wool,
            this.wood,
            this.wheat,
            this.brick,
            this.ore + 1
        );
    }
    
    decrementWool(): PossessedResources {
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
    
    decrementWood(): PossessedResources {
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
    
    decrementWheat(): PossessedResources {
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
    
    decrementBrick(): PossessedResources {
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
    
    decrementOre(): PossessedResources {
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

    setToZero(): PossessedResources{
        return new PossessedResources(0, 0, 0, 0, 0);
    }


}


export {PossessedResources}