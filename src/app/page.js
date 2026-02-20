import BrandSection from "~/components/Section/Common/BrandSection/BrandSection";
import ChooseUsSection from "~/components/Section/Home-3/ChooseUsSection";
import HeroSection from "~/components/Section/Home-3/HeroSection";
import ItSolutionSection from "~/components/Section/Home-3/ItSolutionSection";
import ItSolutionSection2 from "~/components/Section/Home-3/ItSolutionSection2";
import LetsBuildSection from "~/components/Section/Home-3/LetsBuildSection";
import RecentBlogSection from "~/components/Section/Home-3/RecentBlogSection";
import RecentProjectsSection from "~/components/Section/Home-3/RecentProjectsSection/RecentProjectsSection";
import SuccessRatesSection from "~/components/Section/Home-3/SuccessRatesSection";
import ServiceSlideSection from "~/components/Section/Home-3/ServiceSlideSection";
import HeaderThree from "~/components/Section/Common/Header/HeaderThree";
import ServiceSection from "~/components/Section/Service/ServiceSection";
import LogoMarqueeSection from "~/components/Section/Home-3/LogoMarqueeSection/LogoMarqueeSection";
import ContactSection from "~/components/Section/Contact/ContactSection";
import ServiceHighlightsSection from "~/components/Section/Service/ServiceHighlightsSection";
import serviceOverviewHighlights from "~/db/serviceOverviewHighlights.json";
const HomeThree = () => {
  return (
    <div>
      <HeaderThree />
      <HeroSection />
      <LogoMarqueeSection />
      <ServiceSlideSection />
      <div className="service-page-pillars-title-wrap">
        <ServiceHighlightsSection
          title="Four Pillars of the Protek Integrated Approach"
          items={serviceOverviewHighlights}
        />
      </div>
      <ItSolutionSection />
      <SuccessRatesSection />
      <ItSolutionSection2 />
      {/* <RecentProjectsSection /> */}
      {/* <BrandSection /> */}
      {/* <LetsBuildSection /> */}
      <ContactSection />
      {/* <RecentBlogSection /> */}
    </div>
  );
};

export default HomeThree;
