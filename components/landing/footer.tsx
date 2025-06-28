export function Footer() {
    return (
        <footer className="py-12 bg-neutral-50 border-t border-neutral-100">
            <div className="container mx-auto px-4 lg:px-6 text-center">
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
                    className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-neutral-800 transition-colors duration-200"
                    aria-label="Riverstone on LinkedIn"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M4.98 3.5C4.98 2.12 6.1 1 7.48 1s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S4.98 4.88 4.98 3.5zM.5 8h5.95v15H.5V8zM13.5 8c-3.54 0-6.4 2.83-6.4 6.3v8.7h5.95v-8.2c0-1.18.9-2.1 2.05-2.1 1.14 0 2.05.92 2.05 2.1v8.2H23v-8.8C23 11.1 19.9 8 16.1 8c-1.79 0-3.37.7-4.6 1.8V8h-2z"/>
                    </svg>
                </a>
                <a
                    href="https://x.com/Riverstone_one"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-neutral-800 transition-colors duration-200"
                    aria-label="Riverstone on X"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                        <path d="M22 3H2L11.5 12 2 21h20L12.5 12 22 3z"/>
                    </svg>
                </a>
            </div>
        </footer>
    );
}
