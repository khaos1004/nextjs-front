export default function Footer() {
    return (
        <footer
            className="flex flex-col items-center text-center text-white bg-gray-800 w-100% absolute bottom-0 left-0 w-full">
            <div className="container pt-6 ">
                <div className="">
                    <p className="flex items-center justify-center">
                        <span className="mr-4">Register for free</span>
                        <button
                            type="button"
                            className="inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Sign up!
                        </button>
                    </p>
                </div>
            </div>

            {/* <!--Copyright section--> */}
            <div
                className="w-full p-4 text-center">
                © 2023 Copyright:
                <a className="text-white" href="">HaionNet</a>
            </div>
        </footer>
    )
}