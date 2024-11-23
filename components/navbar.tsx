"use client"
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

const NavBar = () => {
    const router = useRouter()
    return (
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
        <h1 className="text-3xl" onClick={()=>router.push("./")}> Velvet<span className="font-bold">Beauty</span></h1>
        
        <div className="items-center justify-between hidden sm:flex">
            <p>Menu desktop</p>
        </div>

        <div className="flex sm:hidden">
            <p>item menu mobile</p>
        </div>

        <div className="flex items-center justify-between gap-2 sm:gap-7">
            <ShoppingCart strokeWidth="1"/>
        </div>

        </div>
    );
}

export default NavBar;