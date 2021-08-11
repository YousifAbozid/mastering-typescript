const carMakers: string[] = ["ford", "toyota", "bmw"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatiable values
// carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexable types
const importantDates: (string | Date)[] = [new Date(), "1999-03-12"];
importantDates.push("2030-10-10");
importantDates.push(new Date());
