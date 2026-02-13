/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

import { COLORS } from '../helpers/colors.ts';

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Hamburger{
  prepare():void;
}

interface Drink {
  pour():void
}

class ChikenHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando hamburguesa de pollo', COLORS.yellow);
  }
}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando hamburguesa de res', COLORS.brown);
  }
}

class Water implements Drink {
  pour(): void {
    console.log('Sirviendo vaso de agua', COLORS.blue);
  }
}

class Soda implements Drink {
  pour(): void {
    console.log('Sirviendo vaso de soda', COLORS.black);
  }
}

interface RestaurantFactory {
  createHumburger():Hamburger;
  createDrink():Drink
}

class FastFooRestaurantFactory implements RestaurantFactory {
  createHumburger(): Hamburger {
    return new BeefHamburger()
  }
  createDrink(): Drink {
    return new Soda();
  }

}

class HealthyFooRestaurantFactory implements RestaurantFactory {
  createHumburger(): Hamburger {
    return new ChikenHamburger();
  }
  createDrink(): Drink {
    return new Water();
  }

}

function main(factory: RestaurantFactory){
  const hamburger = factory.createHumburger();
  const drink = factory.createDrink();

  hamburger.prepare();
  drink.pour();
}
main(new HealthyFooRestaurantFactory())