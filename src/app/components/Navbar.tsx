import Link from "next/link";
import Image from "next/image";
import SearchBar from "./Search";
import { Bell, Home, ShoppingBag, ShoppingCart } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";
const Navbar = () => {
    return (
        <div className="w-full flex item-center justify-between border-b border-gray-200 pb-4">
            {/* LEFT */}
            <Link href="/" className="flex items-center gap-2">
                <Image 
                    src="/logo.png"
                    alt="TrendLama" 
                    width={36}
                    height={36}
                    className="w-6 h-6 md:w-9 md:h-9"
                />
                <p className="hidden md:block text-md font-medium tracking-wider">TRENDLAMA</p>
            </Link>
            {/* RIGHT */}
            <div className="flex items-center gap-6">
                <SearchBar/>
                <Link href='/'>
                    <Home className="w-4 h-4 text-gray-600"/>
                </Link>
                <Bell className="w-4 h-4 text-gray-600"/>
                <ShoppingCartIcon/>
                <Link href="/login">Sign in</Link>
            </div>
        </div>
    )
}

export default Navbar