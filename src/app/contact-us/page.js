import HeaderTwo from "~/components/Section/Common/Header/HeaderTwo";
import PageHeader from "~/components/Section/Common/PageHeader";
import ContactSection from "~/components/Section/Contact/ContactSection";
import MapSection from "~/components/Section/Contact/MapSection";

const ContactPage = () => {
    return (
        <>
        <HeaderTwo className="tekup-header-top bg-light1 "/>
           <PageHeader title="Contact us"/> 
           <ContactSection/>
           {/* <MapSection/> */}
        </>
    );
};

export default ContactPage ;