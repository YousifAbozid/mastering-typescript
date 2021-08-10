const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b: number): number {
    return a / b;
}

const multiply = function (a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
};

// A function returning 'never' cannot have a reachable end point.
const throwError = (message: string): never => {
    throw new Error(message);
};

// If there is might be a reachable end point use void annotation instead
const throwError2 = (message: string): void => {
    if (!message) {
        throw new Error(message);
    }
};

const todaysWeather = {
    date: new Date(),
    weather: "sunny",
};

const logWeather = ({
    date,
    weather,
}: {
    date: Date;
    weather: string;
}): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);
