import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.png"
import { redirect } from "next/navigation";
import { getCart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";
import UserMenuButton from "./UserMenuButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function  searchProducts(formData:FormData) {
    "use server"

    const searchQuery= formData.get("searchQuery")?.toString();

    if(searchQuery){
        redirect("/search?query=" + searchQuery)
    }
}

export default async function Navbar(){
    const session = await getServerSession(authOptions)
    const cart = await getCart()

    return (
        <div className="bg-base-100" >
            <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
                <div className="flex-1 mx-2">
                    <Link href="/" className="btn btn-ghost text-3xl normal-case h-16">
                        <Image src={logo} height={60} width={60} alt="Pepozone logo"/>
                        Pepozone
                    </Link>
                </div>
                <div className="flex-none gap-2 mx-2">
                    <form action={searchProducts}>
                        <div className="form-control">
                            <input 
                                name="searchQuery"
                                placeholder="Search"
                                className="input input-bordered w-full m-w-{100px}"
                            />
                        </div>
                    </form>
                </div>
                <ShoppingCartButton cart={cart} />
                <UserMenuButton session={session} />
            </div>
        </div>
    )
}