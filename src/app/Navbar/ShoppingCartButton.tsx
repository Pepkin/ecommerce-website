"use client";

import { ShoppingCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";

interface ShoppingCartButtonProps{
    cart: ShoppingCart | null
}


export default function ShoppingCartButton({cart} : ShoppingCartButtonProps){

    return(
        <div className="dropdown-end dropdown">
            <label tabIndex={0} className="btn-ghost btn-circle btn">
                <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-7 w-7" 
                viewBox="0 0 24 24" 
                fill="none">
                    <circle cx="10" cy="20" r="1" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="18" cy="20" r="1" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 3H5.5C5.5 3 5.91294 4.82843 6.17753 6C6.70622 8.34099 7.43235 11.5562 7.85836 13.4425C8.0643 14.3543 8.87398 15 9.8088 15H18.3957C19.3331 15 20.1447 14.3489 20.348 13.4339L22 6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22 6H6.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="badge badge-sm indicator-item">
                    {cart?.size || 0}
                </span>
                </div>
            </label>
            <div
            tabIndex={0}
            className="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow z-50"
            >
                <div className="card-body ">
                    <span className="text-lg font-bold">{cart?.size || 0} Items</span>
                    <span className="text-info">
                        Subtotal: {formatPrice(cart?.subtotal || 0)}
                    </span>
                    <div className="card-actions">
                        <Link
                        href="/cart"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            const elem = document.activeElement as HTMLElement
                                if(elem){
                                    elem.blur();
                                }
                            }}
                        >
                            View cart
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}