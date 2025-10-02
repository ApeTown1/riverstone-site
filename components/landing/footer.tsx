import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="py-12 bg-neutral-50 border-t border-neutral-100">
            <div className="container mx-auto px-4 lg:px-6 text-center">
                <div className="container mx-auto px-4 py-8 flex items-center justify-center">
                    <div className="w-40 md:w-56">
                        <Link href="/" aria-label="Go to home">
                            <Image
                                src="/Riverstone Letterhead White.png"
                                alt="Riverstone logo"
                                width={240}
                                height={240}
                                className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
                                priority={false}
                            />
                        </Link>
                    </div>
                </div>
                <p className="text-sm text-neutral-500">
                    © {new Date().getFullYear()} Riverstone. All rights
                    reserved.
                </p>
            </div>
            
            {/* Persistent Social Links */}
            <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-40">
                <a
                    href="https://www.linkedin.com/company/riverstoneone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white p-3 rounded-full shadow-lg opacity-80 hover:opacity-100 transition-all duration-200"
                    aria-label="Riverstone on LinkedIn"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-current">
                        <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.59 53.59 0 1153.59-53.59 53.58 53.58 0 01-53.6 53.59zM447.9 448h-92.68V302.4c0-34.7-.7-79.4-48.35-79.4-48.36 0-55.8 37.8-55.8 76.9V448h-92.7V148.9h89.06v40.8h1.3c12.4-23.4 42.7-48.3 87.82-48.3 93.96 0 111.3 61.9 111.3 142.3V448z"/>
                    </svg>
                </a>
                <a
                    href="https://x.com/Riverstone_one"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white p-3 rounded-full shadow-lg opacity-80 hover:opacity-100 transition-all duration-200"
                    aria-label="Riverstone on X"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" className="w-4 h-4 fill-current">
                        <path d="M720.3 516.5l438.7-516.5h-101.5l-377 443.6L389.1 0H0l450.2 641.1L0 1227h101.5l413.2-486.3 287.8 486.3h389.1L720.3 516.5zm-147.9 173.9l-48.2-81.8L136.4 78.7h190.7l300.6 508.2 48.2 81.8 405.6 683.1h-190.6L572.4 690.4z"/>
                    </svg>
                </a>
            </div>
        </footer>
    );
}
