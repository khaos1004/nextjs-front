function Navbar() {
    return (
        <nav className="bg-gray-800 pt-5 pb-5 fixed top-0 left-0 w-full h-16">
            <div className="container">
                <div className="flex">
                    <div className="flex w-[30%] pl-5">
                        <a className="text-white text-center text-lg font-bold w-auto transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10 " href="/">GroupWare</a> 
                        <p className="text-white text-center text-lg font-bold w-auto pl-3 pr-3">|</p>
                        <a className="text-white text-center text-lg font-bold w-auto transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-10" href="/">ERP</a>
                    </div>
                    <div className="flex w-[70%] space-x-12">
                        <a className="text-white w-auto hover:animate-pulse">그룹웨어1</a>
                        <a className="text-white w-auto w-14 hover:animate-pulse" >그룹웨어2</a>
                        <a className="text-white w-14 hover:animate-pulse w-auto" >그룹웨어3</a>
                        <a className="text-white w-14 hover:animate-pulse w-auto" >그룹웨어4</a>
                        <a className="text-white w-14 hover:animate-pulse w-auto" >그룹웨어5</a>
                        <a className="text-white w-14 hover:animate-pulse w-auto" >그룹웨어6</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;