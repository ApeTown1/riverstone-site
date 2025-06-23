import { ServicesSection } from "@/components/landing";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <ServicesSection />
            </main>
            <Footer />
        </div>
    );
}
