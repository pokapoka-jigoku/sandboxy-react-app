import { PossessedResources } from "../features/PossessedResources";

function incrementWool(resources: PossessedResources): PossessedResources {
    return new PossessedResources(0, 0, 0, 0, 0);
}

function incrementWood(resources: PossessedResources): PossessedResources {
    return new PossessedResources(
        resources.wool,
        resources.wood + 1,
        resources.wheat,
        resources.brick,
        resources.ore
    );
}

function incrementWheat(resources: PossessedResources): PossessedResources {
    return new PossessedResources(
        resources.wool,
        resources.wood,
        resources.wheat + 1,
        resources.brick,
        resources.ore
    );
}

function incrementBrick(resources: PossessedResources): PossessedResources {
    return new PossessedResources(
        resources.wool,
        resources.wood,
        resources.wheat,
        resources.brick + 1,
        resources.ore
    );
}

function incrementOre(resources: PossessedResources): PossessedResources {
    return new PossessedResources(
        resources.wool,
        resources.wood,
        resources.wheat,
        resources.brick,
        resources.ore + 1
    );
}

function decrementWool(resources: PossessedResources): PossessedResources {
    return new PossessedResources(
        resources.wool - 1,
        resources.wood,
        resources.wheat,
        resources.brick,
        resources.ore
    );
}

function decrementWood(resources: PossessedResources): PossessedResources {
    return new PossessedResources(
        resources.wool,
        resources.wood - 1,
        resources.wheat,
        resources.brick,
        resources.ore
    );
}

function decrementWheat(resources: PossessedResources): PossessedResources {
    return new PossessedResources(
        resources.wool,
        resources.wood,
        resources.wheat - 1,
        resources.brick,
        resources.ore
    );
}

function decrementBrick(resources: PossessedResources): PossessedResources {
    return new PossessedResources(
        resources.wool,
        resources.wood,
        resources.wheat,
        resources.brick - 1,
        resources.ore
    );
}

function decrementOre(resources: PossessedResources): PossessedResources {
    return new PossessedResources(
        resources.wool,
        resources.wood,
        resources.wheat,
        resources.brick,
        resources.ore - 1
    );
}