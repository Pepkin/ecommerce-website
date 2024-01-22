import PriceTag from "@/components/PriceTag"
import { prisma } from "@/lib/db/prisma"
import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { cache } from "react"
import AddToCartButton from "./AddToCartButton"
import { incrementProductQuantity } from "./actions"

interface ProdutPageProps {
    params: {
        id: string,
    }
}

const getProdcut = cache(async (id: string) => {
    const product = await prisma.product.findUnique({where: {id}})

    if(!product){
        notFound()
    }

    return product
})

export async function generateMetadata({params : {id}} : ProdutPageProps): Promise<Metadata> {
    const product = await getProdcut(id)

    return {
        title: product.name + " - Pepozone",
        description: product.description,
        openGraph: {
            images: [{url: product.imageUrl}]
        }
    }
}

export default async function ProductPage({params : {id}} : ProdutPageProps) {
    
    const product = await getProdcut(id)

    return(
        <div className="flex flex-col lg:flex-row gap-4 lg:items-center">
            <Image
                src={product.imageUrl}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-lg"
            />
            <div>
                <h1 className="text-5xl font-bold">{product.name}</h1>
                <PriceTag price={product.price} className="mt-4"/>
                <p className="py-6">{product.description}</p>
                <AddToCartButton productId={product.id} incrementProductQuantity={incrementProductQuantity}/>
            </div>
        </div>
    )
}