import { ShoppingCart } from "@/lib/db/cart";
import Image from "next/image";
import cartImage from "@/app/assets/cart.png"

interface ShoppingCartButtonProps{
    cart: ShoppingCart | null
}

export default function ShoppingCartButton({cart} : ShoppingCartButtonProps){
    return(
        <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle btn">
                <div className="indicator">
                    <Image src={cartImage} alt="CartImage"/>
                </div>
            </label>
        </div>
    )
}