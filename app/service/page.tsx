import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/service/Section1";
import Section3 from "@/components/sections/about/Section3";

export default function Home() {
    return (
        <>
            <Layout  headerStyle={6} footerStyle={6}  mainMenuStyle="one-page">
                <SectionHeader title="Nos Services" group_page="" current_page="Nos Services" display="d-none" />
                <Section1 />
                {/* <Section3 /> */}
            </Layout>
        </>
    );
}
