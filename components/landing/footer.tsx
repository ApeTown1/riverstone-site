export function Footer() {
    return (
        <footer className="py-12 bg-neutral-50 border-t border-neutral-100">
            <div className="container mx-auto px-4 lg:px-6 text-center">
                <p className="text-sm text-neutral-500">
                    © {new Date().getFullYear()} Riverstone. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}
