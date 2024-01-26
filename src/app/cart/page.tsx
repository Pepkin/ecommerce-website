import { getCart } from "@/lib/db/cart"

export const metadata = {
    title: "Your Cart - Pepozone"
}

export default async function CartPage() {
    const cart = await getCart()

    return (
        <div>
            <h1 className="mb-6 text-3xl font-bold ">Your Shopping Cart</h1>
            {}
        </div>
    )
}