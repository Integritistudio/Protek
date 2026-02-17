import ServiceListSection1 from "~/components/Section/AboutUs/ServiceListSection1";
import ServiceListSection2 from "~/components/Section/AboutUs/ServiceListSection2";
import ServiceListSection3 from "~/components/Section/AboutUs/ServiceListSection3";
import ChooseUsSection from "~/components/Section/Common/ChooseUs/ChooseUsSection";
import CtaSection from "~/components/Section/Common/Cta/CtaSection";
import HeaderTwo from "~/components/Section/Common/Header/HeaderTwo";
import PageHeader from "~/components/Section/Common/PageHeader";
import WorkProcessSection from "~/components/Section/Common/WorkProcess/WorkProcessSection";
import ServiceSection from "~/components/Section/Service/ServiceSection";

const ServicePage = () => {
    return (
        <div>
            <HeaderTwo className="tekup-header-top bg-light1 "/>
            <PageHeader title="Our Services"/>
            {/* <ChooseUsSection className="section tekup-section-padding4"/> */}
            <ServiceSection/>
            <ServiceListSection1 />
            <ServiceListSection2 />
            <ServiceListSection3 />
            <WorkProcessSection/>
            <CtaSection className="service-page-cta-no-overlay" />
        </div>
    );
};

export default ServicePage ;
