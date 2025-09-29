import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <div className="mt-16 flex flex-col  items-center gap-8 md:flex-row justify-between md:items-start bg-gray-800 p-8 rounded-lg">
            <div className="flex flex-col gap-4 items-center  md:items-start">
            <Link href="/" className="flex items-center gap-2">
                <Image 
                    src="/logo.png"
                    alt="TrendLama" 
                    width={36}
                    height={36}   
                    />
                <p className="hidden md:block text-md font-medium tracking-wider text-white">
                    TRENDLAMA
                </p>
            </Link>
            <p className="text-sm text-gray-400">© 2025 Trendlama.</p>
            <p className="text-sm text-gray-400">All rights reserved.</p>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-800 items-center md:items-start">
                <p className="text-sm text-amber-50">Links</p>
                <Link href="/">Homepage</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Terms of Service</Link>
                <Link href="/">Privacy Policy</Link>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-800 items-center md:items-start">
                <p className="text-sm text-amber-50">Links</p>
                <Link href="/">All Products</Link>
                <Link href="/">New Arrival</Link>
                <Link href="/">Best Seller</Link>
                <Link href="/">Sale</Link>
            </div>
            <div className="flex flex-col gap-4 text-sm text-gray-800 items-center md:items-start">
                <p className="text-sm text-amber-50">Links</p>
                <Link href="/">About</Link>
                <Link href="/">Contact</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Affiliate Program</Link>
            </div>
        </div>
    )
}
export default Footer