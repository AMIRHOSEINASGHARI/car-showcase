export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
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

export const generateCarImageUrl = (car, angle) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
  );
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
