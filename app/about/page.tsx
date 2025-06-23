import { TeamSection } from "@/components/landing";
import { AboutSection } from "@/components/landing/about-section";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <TeamSection />
                <AboutSection />
            </main>
            <Footer />
        </div>
    );
}
