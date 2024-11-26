import Header from "../Components/Header";
import Faqs from "../Components/Faqs";
import SubHero from "../Components/SubHero";
import Footer from "../Components/Footer";
import CelebHero from "../Components/CelebHero";
import Celeb from "../Components/Celeb";

export default function CelebLandingPage() {
  return (
    <div className="bg-gray-100 overflow-x-hidden">
      <Header />
      <CelebHero />
      <Celeb />
      <Faqs />
      <SubHero />
      <Footer />
    </div>
  );
}
