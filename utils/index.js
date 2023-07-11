export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.RAPID_API_HOST,
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}

export function calculateCarRent(city_mpg, year) {
  const baseRatePerDay = 50; //base rate per day in dollars
  const mileFactor = 0.1; //additional rate per mile driven
  const ageFactor = 0.05; //additional rate per age of car

  const mileRate = city_mpg * mileFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  return (baseRatePerDay + mileRate + ageRate).toFixed();
}
