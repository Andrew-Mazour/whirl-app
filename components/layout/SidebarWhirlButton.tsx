import Image from "next/image";

const SidebarWhirlButton = () => {
    return (
        <div>
            {/* Image for Mobile View */}
            <div
                className="
                    mt-6
                    lg:hidden
                    rounded-full
                    h-14
                    w-14
                    p-2
                    flex
                    items-center
                    justify-center
                    hover:bg-opacity-80
                    transition
                "
            >
                <Image 
                    src="/images/whirl.png" 
                    alt="Whirl"
                    width={40} 
                    height={40} 
                    className="rounded-full"
                />
            </div>

            {/* Image for Desktop View */}
            <div 
                className="
                    mt-6
                    hidden
                    lg:flex
                    items-center
                    justify-center
                    
                "
            >
                <Image 
                    src="/images/whirl.png" 
                    alt="Whirl"
                    width={60} 
                    height={60} 
                    className="mr-2"
                />
                <p className="
                    text-center
                    font-semibold
                    text-white
                    text-[20px]
                ">
                    
                </p>
            </div>
        </div>
    );
}

export default SidebarWhirlButton;
