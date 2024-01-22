// Спроєктуйте інтерфейс CarProperties з такими характеристиками, як brand, year та fuelType.
// Створіть клас Car, який реалізує цей інтерфейс і має метод getDetails(), що виводить інформацію про автомобіль.

interface CarProperties {
  brand: string;
  year: number;
  fuelType: "petrol" | "diesel" | "electric";
}

class Car implements CarProperties {
  constructor(
    public brand: string,
    public year: number,
    public fuelType: "petrol" | "diesel" | "electric"
  ) {}

  getDetails() {
    console.log(
      `This is a ${this.year} ${this.brand} that runs on ${this.fuelType}.`
    );
  }
}
