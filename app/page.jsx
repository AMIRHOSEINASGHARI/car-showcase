// Components
import { CustomFilter, Hero, SearchBar } from "@/components";

const Home = () => {
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
        <div className="mt-10">
          <div className="flex flex-col lg:flex-row justify-between">
            <SearchBar />
            <div className="flex items-center gap-5">
              <CustomFilter title="fuel" />
              <CustomFilter title="year" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
