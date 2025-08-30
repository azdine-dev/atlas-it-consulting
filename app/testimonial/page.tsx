import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/testimonial/Section1";
import Section2 from "@/components/sections/about/Section3";
export default function Home() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={6}  mainMenuStyle="one-page">
                <SectionHeader title="Avis Clients" group_page="" current_page="Témoiagnages" display="d-none" />
                <Section1 />
                {/* <Section2 /> */}
            </Layout>
        </>
    );
}
