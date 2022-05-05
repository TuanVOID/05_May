import {Animal} from "../AbstractClass/Animal";
import {Edible} from "../Interface/Edible";

export class Chicken extends Animal implements Edible{
    howToEat(): string {
       return "Could be fried"
    }
    makeSound() :string {
        return "Chicken: cluck cluck"
    }

}