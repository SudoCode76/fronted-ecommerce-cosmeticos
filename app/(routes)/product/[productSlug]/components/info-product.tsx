import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Heart } from "lucide-react";

export type InfoProductProps = {
    product: ProductType
}
const InfoProduct = (props: InfoProductProps) => {
    const {product} = props
    console.log(product)

    return (
        <div className="px-6">  
        <div className="justify-between mb-3 sm:flex">
            <h1 className="text-2xl">{product.productoNombre}</h1>

            <div className="flex items-center justify-between gap-3">
                <p className="px-2 py-1 text-xs text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">
                    Oferta
                </p>
                </div>
            </div>
            <Separator className="my-4" />
            <p>{product.descripcion}</p>
            <Separator className="my-4" />
            <p className="my-4 text-2xl">{formatPrice(product.precio)}</p>
            <div className="flex items-center gap-5">
                <Button className="w-full" onClick={() => console.log("comprar")}>Comprar</Button>
                <Heart width={30} strokeWidth={1} className="transtion duration-300 cursor-pointer hover:fill-black"
                onClick={() => console.log("agrega a tus productos favoritos")} />
            </div>
        </div>
    
    );
}
 
export default InfoProduct;