function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <a className="text-white text-lg font-bold" href="/">Home</a>
                    <div className="space-x-4">
                        <a className="text-white" href="/about">About</a>
                        <a className="text-white" href="/contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;