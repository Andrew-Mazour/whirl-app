import { useRouter } from "next/router";
import Image from "next/image";  // Import Next.js Image component

const SidebarLogo = () => {
    const router = useRouter();

    return (
        <div 
        onClick={() => router.push('/')}
        className="
            rounded-full
            h-70
            w-70
            p-4
            flex
            items-center
            justify-center
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
                className="transform -translate-x-5"
            />
        </div>
    );
}

export default SidebarLogo;
