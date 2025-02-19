import { useRouter } from "next/router";
import Image from "next/image";  // Import Next.js Image component

const SidebarLogo = () => {
    const router = useRouter();

    return (
        <div 
        onClick={() => router.push('/')}
        className="
            flex 
            items-center 
            justify-center
            w-full
            p-4
            hover:bg-blue-300 
            hover:bg-opacity-10 
            cursor-pointer 
            transition
        ">
            {/* Load custom logo */}
            <Image 
                src="/images/whirlDot.png"  // Correct path (relative to public folder)
                alt="Logo"
                width={70} 
                height={70}
                className="w-10 h-10 md:w-[70px] md:h-[70px] md:ml-1" // Smaller on mobile (w-10, h-10), larger on md+
                
            />
        </div>
    );
}

export default SidebarLogo;
