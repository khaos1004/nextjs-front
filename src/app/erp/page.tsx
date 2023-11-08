export default function Main() {
    return (
        <div
            data-te-lightbox-init
            className="flex flex-col space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
            <div className="flex h-full w-full flex-1 flex-col">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Slides/1.webp"
                    data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Slides/1.webp"
                    alt="Table Full of Spices"
                    className="mb-5 w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Square/1.webp"
                    data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Square/1.webp"
                    alt="Coconut with Strawberries"
                    className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
            </div>
            <div className="flex h-full w-full flex-1 flex-col">
                <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Thumbnails/Vertical/1.webp"
                    data-te-img="https://mdbcdn.b-cdn.net/img/Photos/Vertical/1.webp"
                    alt="Dark Roast Iced Coffee"
                    className="w-full cursor-zoom-in data-[te-lightbox-disabled]:cursor-auto" />
            </div>
        </div>
    )
}
