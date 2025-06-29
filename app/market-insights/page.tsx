import { MarketInsightsSection } from "@/components/landing";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";

export default function CaseStudiesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <MarketInsightsSection />
            </main>
            <Footer />
        </div>
    );
}
