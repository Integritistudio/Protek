import AboutSection from "~/components/Section/AboutUs/AboutSection";
import FactSection from "~/components/Section/Common/Fact/FactSection";
import PageHeader from "~/components/Section/Common/PageHeader";
import ContentSection from "~/components/Section/AboutUs/ContentSection";
import ContentSection2 from "~/components/Section/AboutUs/ContentSection2";
import TeamSection from "~/components/Section/AboutUs/TeamSection";
import TestimonialSection from "~/components/Section/AboutUs/TestimonialSection/TestimonialSection";
import ContactSection from "~/components/Section/AboutUs/ContactSection";
import CtaSection from "~/components/Section/Common/Cta/CtaSection";
import HeaderTwo from "~/components/Section/Common/Header/HeaderTwo";
import ListSection from "~/components/Section/AboutUs/ListSection";
import ChooseUsSection from "~/components/Section/Home-3/ChooseUsSection";
import FeatureListSection from "~/components/Section/AboutUs/FeatureListSection";
import ServiceSlideSection from "~/components/Section/Home-1/ServiceSlideSection";

const Aboutpage = () => {
  return (
    <>
      <HeaderTwo className="tekup-header-top bg-light1 " />
      <PageHeader title="About Us" />
      <AboutSection />
      <ContentSection />
      {/* <ContentSection2 /> */}
      <FactSection />
      <ListSection />
      {/* <TeamSection/> */}
      {/* <FeatureListSection /> */}
      {/* <ServiceSlideSection /> */}
      <TestimonialSection />
      <ChooseUsSection />
      <ContactSection />
      {/* <CtaSection/> */}
    </>
  );
};

export default Aboutpage;