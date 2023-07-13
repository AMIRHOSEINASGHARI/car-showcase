// Components
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
// Fetching cars
import { fetchCars } from "@/utils";
// Constants
import { fuels, yearsOfProduction } from "@/constants";

const Home = async ({ searchParams }) => {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  const isDataRecieved = allCars.length > 0;
  console.log(searchParams);

  return (
    <div>
      <Hero />
      <div className="mt-20 px-6 max-w-[1440px] mx-auto">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Car Catalogue</h1>
          <p className="text-sm text-gray-500">
            Explore the cars you might like
          </p>
        </div>
        <div className="my-10">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-5 lg:space-y-0 lg:space-x-5">
            <SearchBar />
            <div className="flex items-center gap-5">
              <CustomFilter title="fuel" options={fuels} />
              <CustomFilter title="year" options={yearsOfProduction} />
            </div>
          </div>
        </div>
        <div>
          {isDataRecieved ? (
            <section>
              <div className="cars-section">
                {allCars.map((car, i) => (
                  <CarCard car={car} key={i} />
                ))}
              </div>
              <ShowMore
                pageNumber={(searchParams.limit || 10) / 10}
                isNext={(searchParams.limit || 10) > allCars.length}
              />
            </section>
          ) : (
            <div className="font-bold">
              <h1 className="text-3xl">Oops, no results!</h1>
              <p className="capitalize">{allCars.message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
