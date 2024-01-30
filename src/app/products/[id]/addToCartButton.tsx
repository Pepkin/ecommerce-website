"use client"

import { useState, useTransition } from "react"

interface AddToCartButtonProps {
    productId: string,
    incrementProductQuantity: (productId: string) => Promise<void>
}

export default function AddToCartButton({productId, incrementProductQuantity} : AddToCartButtonProps){
    const [isPending, startTransition] = useTransition();
    const [success, setSuccess] = useState(false);
    
    return (
        <div className="flex items-center gap-2">
            <button className="btn btn-primary" 
            onClick={() => {
                setSuccess(false);
                startTransition(async () => {
                    await incrementProductQuantity(productId);
                    setSuccess(true);
                })
            }}>
                Add to Cart
                <svg xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5" 
                viewBox="0 0 24 24" 
                fill="none">
                    <circle cx="10" cy="20" r="1" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="18" cy="20" r="1" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2 3H5.5C5.5 3 5.91294 4.82843 6.17753 6C6.70622 8.34099 7.43235 11.5562 7.85836 13.4425C8.0643 14.3543 8.87398 15 9.8088 15H18.3957C19.3331 15 20.1447 14.3489 20.348 13.4339L22 6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M22 6H6.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            {isPending && <span className="loading loading-infinity loading-md"></span>}
            {!isPending && success && <span className="text-success">Added to Cart</span>}
        </div>
    )
}