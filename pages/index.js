import Banner from "../components/Banner";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";
import ScrollContainer from 'react-indiana-drag-scroll'
import ImageCard from "../components/ImageCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">

          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="sm:grid grid-cols-2 lg:grid-cols-4">
            {exploreData?.map((item, i) => (
              <SmallCard 
                key={i.toString()} 
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>

          <h2 className="text-4xl font-semibold pt-5">Live Anywhere</h2>
          <ScrollContainer className="max-w-full flex space-x-8 my-2 overflow-x-auto py-5 px-2 scrollbar-hide">
            {cardsData?.map((item, i) => (
              <MediumCard 
                key={i.toString()} 
                img={item.img}
                title={item.title}
              />
            ))}
          </ScrollContainer>

          <ImageCard
            img='https://links.papareact.com/4cj'
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb."
            buttonText="Get Inspired"
          />

        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp")
                              .then(res => res.json());

  const cardsData = await fetch("https://links.papareact.com/zp1")
                              .then(res => res.json())

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}