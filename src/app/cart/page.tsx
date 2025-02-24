"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/app/context/CartContext"; // Import useCart
import Catagory from "@/components/Catagory"; // Import Category component

export default function CartPage() {
  const { cartItems } = useCart(); // Fetch cart items from the context

  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const totalDiscount = cartItems.reduce((sum, item) => sum + item.discount, 0);
  const total = subtotal - totalDiscount;

  return (

    <div className="container mx-auto p-4">
    <div className="mt-20">
        
        <Catagory/>
        <div className="flex justify-center">
          <div className="relative w-full max-w-lg mt-10">
            <Input
              type="text"
              placeholder="Search..."
              className="w-xl p-5 rounded-full text-black dark:text-white bg-white dark:bg-[#707071] border-none shadow-md focus:ring-2 focus:ring-blue-400 transition-all"
            />
            <Button
              type="submit"
              className="absolute top-0 right-0 bg-[#2D2B2A] text-white dark:text-black dark:bg-white rounded-full shadow-md transition-transform duration-300 hover:scale-105 m-0.5"
            >
              Explore
            </Button>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-6 mt-20">Shopping Cart</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4 mb-4 font-semibold">
              <div>Project</div>
              <div className="text-right">Price</div>
            </div>
            <Separator className="mb-4" />

            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex gap-4">
                  <div className="relative w-24 h-16 rounded overflow-hidden">
                    <Image
                      src={item.thumbnail || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      Discount - ${item.discount}
                    </p>
                  </div>
                </div>
                <div className="text-right">${item.price}</div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6">
              <h2 className="text-lg font-bold mb-6">ORDER SUMMARY</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <Button variant="outline" className="w-full">
                    One Time Payment
                  </Button>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span>Items {cartItems.length}</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between text-red-500">
                  <span>Discount</span>
                  <span>-${totalDiscount}</span>
                </div>
              </div>

              <Separator className="mb-6" />

              <div className="flex justify-between mb-6">
                <span className="font-bold">Total</span>
                <span className="font-bold">${total}</span>
              </div>

              <Button className="w-full" size="lg">
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
      </div>
  );
}
