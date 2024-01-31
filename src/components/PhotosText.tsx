type HeroProps = {
    title: string;
    subtitle?: string;
    image: string;
}

const PhotosText = ({ title, subtitle, image }: HeroProps) => {
    return (
        <div className="relative overflow-hidden h-[25rem] w-[25rem] border rounded-md m-3">
            {/* Dark div with transparency and background image */}
            <div
                className="absolute inset-0 "
                style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                {/* Text container */}
                <div className="absolute bottom-0 w-full text-white text-center bg-dark h-[50%]">
                    <h1 className="text-3xl font-alfa-slab font-bold">{title}</h1>
                    {subtitle && <p className="text-xl mt-1">{subtitle}</p>}
                </div>
            </div>
        </div>
    );
};

export default PhotosText;
