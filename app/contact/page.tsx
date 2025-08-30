import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/contact/Section1";
import Section2 from "@/components/sections/contact/Section2";
export default function Home() {
    return (
        <>
            <Layout headerStyle={6} footerStyle={6}  mainMenuStyle="one-page">
                <SectionHeader title="Contacter Nous" group_page="" current_page="Nous Contacter" display="d-none" />
                <Section1 />
                <Section2 />
            </Layout>
        </>
    );
}
