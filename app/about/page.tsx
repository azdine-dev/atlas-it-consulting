import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/about/Section1";
import Section2 from "@/components/sections/home/Section4";
import Section3 from "@/components/sections/about/Section2";
import Section4 from "@/components/sections/home/Section3";
import Section8 from "@/components/sections/home/Section8";
import Section10 from "@/components/sections/home/Section10";
import Section7 from "@/components/sections/about/Section3";
export default function Home() {
    return (
        <>
            <Layout  headerStyle={6} footerStyle={6}  mainMenuStyle="one-page">
                <SectionHeader title="A Propos de Nous" group_page="" current_page="A propos de Nous" display="d-none" />
                <Section1 />
                {/* <Section2 /> */}
                {/* <Section3 /> */}
                {/* <Section4 /> */}
                <Section8 classList="about-page-testimonial" />
                <Section10 classList="about-page-team" />
                {/* <Section7 /> */}
            </Layout>
        </>
    );
}
