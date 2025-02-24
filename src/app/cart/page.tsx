import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

interface CartItem {
  id: string
  title: string
  price: number
  discount: number
  thumbnail: string
}

// This would typically come from your cart state management
const cartItems: CartItem[] = [
  {
    id: "1",
    title: "Super Market e-commerce web app",
    price: 300,
    discount: 100,
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-24%20205330-U6glnJAMGD7LImTBzDua71z0XgwVM5.png",
  },
  {
    id: "2",
    title: "Career Net Africa",
    price: 600,
    discount: 300,
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-24%20205330-U6glnJAMGD7LImTBzDua71z0XgwVM5.png",
  },
]

export default function CartPage() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0)
  const totalDiscount = cartItems.reduce((sum, item) => sum + item.discount, 0)
  const total = subtotal - totalDiscount

  return (
    <div className="container mx-auto p-4">
      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-8">
        <div className="relative">
          <Input placeholder="search here ..." className="w-full pl-4 pr-20 py-2 rounded-lg border" />
          <Button className="absolute right-0 top-0 bottom-0 px-6 rounded-r-lg">Explore</Button>
        </div>
      </div>

      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

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
                  <Image src={item.thumbnail || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">Discount - ${item.discount}</p>
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
  )
}

