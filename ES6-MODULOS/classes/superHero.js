export default class SuperHero {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
}

function printHeroName(hero) {
    console.log(`Super hero name is: ${hero.name}`);
}

function printHeroPower(hero){
    console.log(`Super hero name is: ${hero.power}`);
}