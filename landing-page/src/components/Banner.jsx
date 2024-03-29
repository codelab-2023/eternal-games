import bannerImage from "../Assets/background-banner.jpg"

export default function Banner() {
    return (
        <>
            <div className="relative h-1/2">
                <img src={bannerImage} alt="banner" />

                <div className="absolute flex flex-col text-center mt-40 bottom-48 w-full">
                    <h1 className="text-5xl font-bold text-white mb-6">Our Games</h1>
                    <h3 className="text-3xl font-bold text-white">200+</h3>
                    <h3 className="text-2xl text-white">Games Available</h3>
                </div>
            </div>

            <h3></h3>
        </>
    )
} 
