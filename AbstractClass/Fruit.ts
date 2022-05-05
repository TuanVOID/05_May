import {Edible} from "../Interface/Edible";

export abstract class Fruit implements Edible {
    abstract howToEat(): string;
}

