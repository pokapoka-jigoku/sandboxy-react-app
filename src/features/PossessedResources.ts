
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

    investToRoad(): PossessedResources {
        const investSpec = new CanInvestSpecification();
        const resService = new ResourceService();
        if(investSpec.isSatisfiedForRoadBy(this)){
            return resService.consume(this, costForRoad);
        } else {
            return this;
        }
    }

    investToFrontier(): PossessedResources {
        const investSpec = new CanInvestSpecification();
        const resService = new ResourceService();
        if(investSpec.isSatisfiedForFrontierBy(this)){
            return resService.consume(this, costForFrontier);
        } else {
            return this;
        }
    }

    investToUrbanization(): PossessedResources {
        const investSpec = new CanInvestSpecification();
        const resService = new ResourceService();
        if(investSpec.isSatisfiedForUrbanizationBy(this)){
            return resService.consume(this, costForUrbanization);
        } else {
            return this;
        }
    }

    investToDevelopment(): PossessedResources {
        const investSpec = new CanInvestSpecification();
        const resService = new ResourceService();
        if(investSpec.isSatisfiedForDevelopmentBy(this)){
            return resService.consume(this, costForDevelopment);
        } else {
            return this;
        }
    }
}

class ResourceService {
    consume(resources: PossessedResources, cost: CostForInvestment): PossessedResources{
        if(this.canPay(resources, cost)){
            return new PossessedResources(
                resources.wool - cost.wool,
                resources.wood - cost.wood,
                resources.wheat - cost.wheat,
                resources.brick - cost.brick,
                resources.ore - cost.ore
            )
        } else {
            return resources;
        }
    }

    canPay(resources: PossessedResources, cost: CostForInvestment): Boolean {
        const inWool = resources.wool >= cost.wool;
        const inWood = resources.wood >= cost.wood;
        const inWheat = resources.wheat >= cost.wheat;
        const inBrick = resources.brick >= cost.brick;
        const inOre = resources.ore >= cost.ore;
        return [inWool, inWood, inWheat, inBrick, inOre].every(v => v === true);
    }
}

class CanInvestSpecification{
    isSatisfiedForRoadBy(resources: PossessedResources): Boolean {
        return this.isSatisfiedBy(resources, "Road");
    }
    isSatisfiedForFrontierBy(resources: PossessedResources): Boolean {
        return this.isSatisfiedBy(resources, "Frontier");
    }
    isSatisfiedForUrbanizationBy(resources: PossessedResources): Boolean {
        return this.isSatisfiedBy(resources, "Urbanization");
    }
    isSatisfiedForDevelopmentBy(resources: PossessedResources): Boolean {
        return this.isSatisfiedBy(resources, "Development");
    }

    private isSatisfiedBy(resources: PossessedResources, target: InvestKind): Boolean {
        const cost: CostForInvestment = (() => {
            switch(target){
                case "Road":
                    return costForRoad;
                case "Frontier":
                    return costForFrontier;
                case "Urbanization":
                    return costForUrbanization;
                case "Development":
                    return costForDevelopment;
                }
            })();
        const inWool = resources.wool >= cost.wool;
        const inWood = resources.wood >= cost.wood;
        const inWheat = resources.wheat >= cost.wheat;
        const inBrick = resources.brick >= cost.brick;
        const inOre = resources.ore >= cost.ore;
        return [inWool, inWood, inWheat, inBrick, inOre].every(v => v === true);
    }
}

type InvestKind = "Road" | "Frontier" | "Urbanization" | "Development";

interface CostForInvestment {
    wool: number;
    wood: number;
    wheat: number;
    brick: number;
    ore: number;
}

const zeroCost: CostForInvestment = {
    wool: 0,
    wood: 0,
    wheat: 0,
    brick: 0,
    ore: 0
} as const;

const costForRoad: CostForInvestment = {
    ...zeroCost,
    wood: 1,
    brick: 1
} as const;

const costForFrontier: CostForInvestment = {
    ...zeroCost,
    wood: 1,
    brick: 1,
    wheat: 1,
    wool: 1
} as const;

const costForUrbanization: CostForInvestment = {
    ...zeroCost,
    wheat: 2,
    ore: 3
} as const;

const costForDevelopment: CostForInvestment = {
    ...zeroCost,
    wheat: 1,
    ore: 1,
    wool: 1
} as const;






export {PossessedResources, CanInvestSpecification}