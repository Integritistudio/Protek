import CtaSection from "~/components/Section/Common/Cta/CtaSection";
import HeaderTwo from "~/components/Section/Common/Header/HeaderTwo";
import PageHeader from "~/components/Section/Common/PageHeader";
import WorkProcessSection from "~/components/Section/Common/WorkProcess/WorkProcessSection";
import ServiceSection from "~/components/Section/Service/ServiceSection";
import ServiceHighlightsSection from "~/components/Section/Service/ServiceHighlightsSection";
import serviceOverviewHighlights from "~/db/serviceOverviewHighlights.json";
import ContactSection from "~/components/Section/Contact/ContactSection";

const ServicePage = () => {
  return (
    <div>
      <HeaderTwo className="tekup-header-top bg-light1 " />
      <PageHeader title="Our Services" />
      <ServiceSection />
      <WorkProcessSection />
      <CtaSection className="service-page-cta-no-overlay" />
      <ContactSection />
    </div>
  );
};

export default ServicePage;
