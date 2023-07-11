// Components
import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
// Fetching cars
import { fetchCars } from "@/utils";

const Home = async () => {
  const allCars = await fetchCars();
  const isDataRecieved =
    Array.isArray(allCars) || allCars.length > 0 || allCars;

  return (
    <div>
      <Hero />
      <div className="mt-20 lg:px-16 px-6">
        <div>
          <h1 className="text-3xl font-extrabold mb-2">Car Catalogue</h1>
          <p className="text-sm text-gray-500">
            Explore the cars you might like
          </p>
        </div>
        <div className="my-10">
          <div className="flex flex-col lg:flex-row justify-between">
            <SearchBar />
            <div className="flex items-center gap-5">
              <CustomFilter title="fuel" />
              <CustomFilter title="year" />
            </div>
          </div>
        </div>
        <div>
          {isDataRecieved ? (
            <div className="cars-section">
              {allCars.map((car, i) => (
                <CarCard car={car} key={i} />
              ))}
            </div>
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
