import ServiceListSection1 from "~/components/Section/AboutUs/ServiceListSection1";
import ServiceListSection2 from "~/components/Section/AboutUs/ServiceListSection2";
import ServiceListSection3 from "~/components/Section/AboutUs/ServiceListSection3";
import HeaderTwo from "~/components/Section/Common/Header/HeaderTwo";
import PageHeader from "~/components/Section/Common/PageHeader";
import ServiceHighlightsSection from "~/components/Section/Service/ServiceHighlightsSection";
import serviceHighlightsMap from "~/db/serviceHighlightsMap.json";
import { notFound } from "next/navigation";
import ContactSection from "~/components/Section/Contact/ContactSection";

const serviceSectionMap = {
  "data-center-telecom": {
    label: "Data Center & Telecom",
    section: <ServiceListSection1 />,
  },
  "logistics-supply-chain-ai-powered": {
    label: "Logistics & Supply Chain (AI-Powered)",
    section: <ServiceListSection2 />,
  },
  "beauty-ecommerce-incubation": {
    label: "Beauty & E-Commerce Incubation",
    section: <ServiceListSection3 />,
  },
};

const ServiceDetailsPage = async ({ params }) => {
  const resolvedParams = await params;
  const serviceSlug = resolvedParams?.service;
  const selectedServiceConfig = serviceSectionMap[serviceSlug];
  const selectedServiceSection = selectedServiceConfig?.section;
  const selectedServiceLabel = selectedServiceConfig?.label;
  const selectedHighlights = serviceHighlightsMap[serviceSlug];

  if (!selectedServiceSection || !selectedHighlights || !selectedServiceLabel) {
    notFound();
  }

  return (
    <div>
      <HeaderTwo className="tekup-header-top bg-light1 " />
      <PageHeader
        title="Our Services"
        breadcrumbs={["Our Services", selectedServiceLabel]}
      />
      {selectedServiceSection}
      <ServiceHighlightsSection
        title={`Four Pillars of ${selectedServiceLabel}`}
        items={selectedHighlights}
      />
      <ContactSection />
    </div>
  );
};

export default ServiceDetailsPage;
