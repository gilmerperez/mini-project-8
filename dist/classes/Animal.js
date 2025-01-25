//Class to create new Animal objects
class Animal {
    constructor(species, hungry, weight, amount) {
        this.species = species;
        this.hungry = hungry;
        this.weight = weight;
        this.amount = amount;
    }
    makeRollCall() {
        console.log(`There are ${this.amount} in the enclosure and the ${this.species} are ${this.hungry ? 'hungry' : 'full'}!`);
    }
}
export default Animal;
