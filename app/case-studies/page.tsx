import { CaseStudiesSection } from "@/components/landing/case-studies-section";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";

export default function CaseStudiesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <CaseStudiesSection />
            </main>
            <Footer />
        </div>
    );
}
