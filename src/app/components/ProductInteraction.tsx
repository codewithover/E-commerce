"use client"

import { ProductType } from "@/types"
import { useRouter, useSearchParams, usePathname } from "next/navigation"


const ProductInteraction = ({
    product,
     selectedColor,
     selectedSize,

}:{
    product:ProductType; 
    selectedColor:string; 
    selectedSize:string }) => {

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    
    const handleTypeChange = (type:string, value:string) => {
        const params = new URLSearchParams(searchParams.toString())
        params.set(type, value)
        router.push(`${pathname}?${params.toString()}`),{scroll: false}
    }
    return(
        <div className="flex flex-col gap-2 mt-4">
            {/* SIZE */}
            <div className="flex flex-col gap-2 text-sm">
                <span className="text-gray-500">Size</span>
                <div className="flex item-center gap-2 ">
                    {product.sizes.map((size)=>(
                        <div className={`cursor-pointer border-1 p-[2px] ${selectedSize === size ? "border-gray-600": "border-gray-300"}`}
                         key={size}
                         onClick={() =>handleTypeChange("size",size)}
                         >
                            <div className={`w-6 h-6 text-center flex item-center justify-center ${
                                selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}>{size.toUpperCase()}</div>
                        </div>
                    ))}
                </div>
            </div>
            {/* COLOR */}
            <div className="flex flex-col gap-2 text-sm"></div>
            {/* QUANTITY */}
            <div className="flex flex-col gap-2 text-sm"></div>
        </div>
    )
}
export default ProductInteraction