import Hero from '../components/Hero'
import Nav from "../components/Nav";
import Flex from "../components/Flex";
import Blog from "../components/Blog";
import Pricing from "../components/Pricing";
import RecentProject from "../components/RecentProject";
import Reviews from "../components/Reviews";
import Map from "../components/Map";
import Meme from '../components/Meme';

export default function Home() {
  return (
    <div className="body">
      <main className="home">
        <Nav />
        <Hero />
      </main>
      <Flex />
      <RecentProject isIndexPage={true} />
      <Meme />
      <Pricing isIndexPage={true} />   
      <Blog />
      <Reviews />
      <Map />
    </div>
  );
}
