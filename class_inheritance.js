// link document https://www.digitalocean.com/community/tutorials/understanding-classes-in-javascript
class Hero
{
    constructor(name, level)
    {
        this.name = name;
        this.level = level;
    }

    greet()
    {
        return `${this.name} says hello.`;
    }
}

class Warrior extends Hero
{
    constructor(name, level, weapon)
    {
        super(name, level);

        this.weapon = weapon;
    }

    attack()
    {
        return `${this.name} attacks with the ${this.weapon}`;
    }
}

class Healer extends Hero
{
    constructor(name, level, spell)
    {
        super(name, level);

        this.spell = spell;
    }

    heal()
    {
        return `${this.name} casts ${this.spell}`;
    }
}