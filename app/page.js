import HomeAbout from "./Sections/HomeAbout";
import HomePageLanding from "./Sections/HomePageLanding";
import HomeProductSection from "./Sections/HomeProducts";

export default function Home() {
  return(
  <>
  <HomePageLanding />
  <HomeProductSection />
  <HomeAbout />
  </>
  );
}
