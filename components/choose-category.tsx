"use client";
import { useGetCategories } from "@/api/getProducts";
import { CategoryType } from "@/types/category";
import { ResponseType } from "@/types/response";
import Link from "next/link";

const ChooseCategory = () => {
    const { result, loading, error }: ResponseType = useGetCategories();
    //console.log(result);

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 pb-4 text-3xl sm:pb-8">Elige tu categoría favorita</h3>

            <div className="grid gap-5 sm:grid-cols-3">
                {!loading &&
                    result !== undefined &&
                    result.map((category: CategoryType) => (
                        <Link
                            key={category.id}
                            href={`/category/${category.slug}`}
                            className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg"
                        >
                            {/* Contenedor fijo para las imágenes */}
                            <div className="relative w-[270px] h-[300px]">
                                <img
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage.formats.medium.url}`}
                                    alt={category.categoriaNombre}
                                    className="absolute inset-0 object-cover w-full h-full transition duration-300 hover:scale-110"
                                />
                            </div>

                            {/* Nombre de la categoría */}
                            <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg">
                                {category.categoriaNombre}
                            </p>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default ChooseCategory;
