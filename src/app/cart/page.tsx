"use client"

import { CartItemType } from "@/types"
import { ArrowRight, Trash2 } from "lucide-react"
import { useSearchParams, useRouter } from "next/navigation"
import ShippingForm from "../components/ShippingForm"
import PaymentForm from "../components/PaymentForm"
import { useState } from "react"
import Image from "next/image"

const CartPage = () => {
  const steps = [
    { id: 1, title: "Shopping Cart" },
    { id: 2, title: "Shipping Address" },
    { id: 3, title: "Payment Method" },
  ]

  const cartItems: CartItemType[] = [
    {
      id: 1,
      name: "Adidas CoreFit T-Shirt",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 39.9,
      sizes: ["s", "m", "l", "xl", "xxl"],
      colors: ["gray", "purple", "green"],
      images: {
        gray: "/products/1g.png",
        purple: "/products/1p.png",
        green: "/products/1gr.png",
      },
      quantity: 1,
      selectedSize: "m",
      selectedColor: "gray",
    },
    {
      id: 2,
      name: "Puma Ultra Warm Zip",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 59.9,
      sizes: ["s", "m", "l", "xl"],
      colors: ["gray", "green"],
      images: { gray: "/products/2g.png", green: "/products/2gr.png" },
      quantity: 1,
      selectedSize: "l",
      selectedColor: "gray",
    },
    {
      id: 3,
      name: "Nike Air Essentials Pullover",
      shortDescription:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      description:
        "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
      price: 69.9,
      sizes: ["s", "m", "l"],
      colors: ["green", "blue", "black"],
      images: {
        green: "/products/3gr.png",
        blue: "/products/3b.png",
        black: "/products/3bl.png",
      },
      quantity: 1,
      selectedSize: "l",
      selectedColor: "black",
    },
  ]

  const searchParams = useSearchParams()
  const router = useRouter()
  const activeStep = parseInt(searchParams.get("step") || "1")

  const [ shippingForm , setShippingForm] = useState(null)
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      {/* TITLE */}
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>

      {/* STEPS */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex items-center gap-2 border-b-2 pb-4 ${
              step.id === activeStep ? "border-gray-800" : "border-gray-200"
            }`}
          >
            <div
              className={`w-6 h-6 rounded-full text-white flex items-center justify-center ${
                step.id === activeStep ? "bg-gray-800" : "bg-gray-400"
              }`}
            >
              {step.id}
            </div>
            <p
              className={`text-sm font-medium ${
                step.id === activeStep ? "text-gray-800" : "text-gray-400"
              }`}
            >
              {step.title}
            </p>
          </div>
        ))}
      </div>

      {/* Step & detail */}
      <div className="w-full flex flex-col lg:flex-row gap-16">
        {/* Step */}
        <div className="w-full lg:w-7/12 shadow-lg border border-gray-100 m-4 rounded-lg flex flex-col gap-8">
          {
            activeStep === 2 ? (
              cartItems.map(item => (
                <div className="flex items-center justify-between" key={item.id}>
            {/* IMAGE   and DETAILS */}
                <div className="flex gap-8">
                  <div className="reletive w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                    <Image src={item.images[item.selectedColor]}
                     alt={item.name}
                     fill
                     className="object-contain" />
                  </div>
                </div>
                {/* DELETE */}
                <button className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 transition-all duration-200 text-red-400 flex items-center justify-center cursor-pointer">
                  <Trash2 className="w-4 h-4"/>
                </button>
                </div>
              ))
            )
             : activeStep === 2 ?
              (<ShippingForm/>) :
               (activeStep === 3 && shippingForm ? 
                (<PaymentForm/>) : <p className="text-gray-500 text-sm">Please fill shipping Form</p>) 
          }
        </div>
        {/* details */}
        <div className="w-full lg:w-5/12 shadow-lg border border-gray-100 m-4 rounded-lg flex flex-col gap-8">
          <h2 className="font-semibold">Cart Detail</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between text-sm">
              <p className=" text-gray-500">Subtotal</p>
              <p className="font-medium">
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <p className=" text-gray-500">Discount</p>
              <p className="font-medium">
               $ 10
              </p>
            </div>
            <div className="flex justify-between text-sm">
              <p className=" text-gray-500">Shipping Fee</p>
              <p className="font-medium">
               $ 10
              </p>
            </div>
            <hr  className="border-gray-200"/>
             <div className="flex justify-between ">
              <p className=" text-gray-500 font-semibold">Total</p>
              <p className="font-medium">
                {cartItems
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
          </div>
          {activeStep === 1 && <button onClick={() => router.push("/cart?step=2" , {scroll : false})} className="w-full bg-gray-800 cursor-pointer hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg flex items-center justify-center gap-2">
            Continue
            <ArrowRight className="w-3 h-3" />
          </button>}
        </div>
      </div>
    </div>
  )
}

export default CartPage
