"use client"
import useCartStore from "@/stores/cardStore"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

const ShoppingCartIcon = () => {

    const {cart} = useCartStore()
    return(
        <Link href="/cart" className="relative">
            <ShoppingCart className="w-4 h-4 text-gray-400"/>
            <span className="absolute -top-3 -right-3 bg-amber-400 rounded-full text-gray-600 w-4 h-4  flex items-center justify-center text-xs font-medium">{cart.length}</span>
        </Link>
    )
}

export default ShoppingCartIcon
