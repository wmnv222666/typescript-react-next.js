import Hero from "../components/Hero";
import React, { useEffect } from 'react';
import CustomFilter from "../components/CustomFilter"
import SearchBar from "../components/Searchbar"
import { fetchDrinks } from "@/utils";
import DrinkCard from "@/components/DrinkCard";
import { ShowMore } from "@/components";


const Home = async () => {
  const allDrink = await fetchDrinks()
  // console.log(allDrink,"getallDrink")
  // const isDataEmpty = !Array.isArray(allDrink) || allDrink.length < 1 || !allDrink;
  return (
    <main className='overflow-hidden'>
      <Hero/>
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            {/* <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} /> */}
            <CustomFilter/>
            <CustomFilter/>
          </div>
        </div>
          <section>
            <div className='home__cars-wrapper'>
            {allDrink.drinks?.map((car, index) =>(
                    <DrinkCard key={index} car={car} />
                  ))}
            </div>

            <ShowMore
              // pageNumber={(searchParams.limit || 10) / 10}
              // isNext={(searchParams.limit || 10) > allDrink.length}
            />
          </section>
      </div>
      </main>

  );
}
export default Home;