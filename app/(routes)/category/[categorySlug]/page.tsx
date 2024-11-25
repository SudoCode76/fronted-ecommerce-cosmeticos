"use client"


import { useGetCategoryProduct } from "@/api/getCategoryProduct"
import { Separator } from "@/components/ui/separator"
import { ResponseType } from "@/types/response"
import { useParams, useRouter } from "next/navigation"
import FiltersControlCategory from "./components/filters-controls-category"
import ProductCard from "./components/product-card"
import { ProductType } from "@/types/product"

export default function page(){
    const params = useParams()
    const {categorySlug} = params
    console.log(categorySlug);
    const {result, loading, error}: ResponseType = useGetCategoryProduct(categorySlug)
    console.log(result)

    const router = useRouter()
    return (
       <div className="max-w-6xl mx-auto sm:py-16 sm:px-24">
        {result && !loading && (
            <h1 className="text-3xl font-medium">{result[0].categoria.categoriaNombre}</h1>
        )}

        <Separator />

            <div className="sm:flex sm:justify-between">
                {result && !loading && (
                    result.map((product: ProductType) =>(
                    <ProductCard key={product.id} product={product} />
                    ))
                )}

            </div>
       </div>

    )
}