    "use client";

    import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
    import { ResponseType } from "@/types/response";
    import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
    import SkeletonSchema from "./skeletonSchema";
    import { ProductType } from "@/types/product";
    import { Card, CardContent } from "./ui/card";
    import { Expand, ShoppingCart } from "lucide-react";
    import IconButton from "./icon-button";
    import { useRouter } from "next/navigation";




    const FeaturedProducts = () => {
        const { result, loading }: ResponseType = useGetFeaturedProducts();
        console.log(result);
        const router = useRouter();

        return (
            <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
                <h3 className="px-6 text-3xl sm:pb-8">Productos destacados</h3>
                <Carousel>
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {loading && <SkeletonSchema grid={3} />}
                        {result != null &&
                            result.map((product: ProductType) => {
                                const { id, images, productoNombre, slug, precio } = product;

                                return (
                                    <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 group">
                                        <div className="p-2">
                                            <Card className="overflow-hidden border border-gray-200 shadow-none group">
                                                <CardContent className="relative h-80">
                                                    <img
                                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`}
                                                        alt={productoNombre}
                                                        className="absolute inset-0 object-cover w-full h-full"
                                                    />
                                                    {/* Icon overlay */}
                                                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition duration-200">
                                                            <IconButton 
                                                            onclick={() => router.push(`product/${slug}`)} 
                                                            icon={ <Expand size={20} />}
                                                            className="text-gray-600"
                                                            />

                                                            <IconButton 
                                                            onclick={() => console.log("add item")} 
                                                            icon={ <ShoppingCart size={20} />}
                                                            className="text-gray-600"
                                                            />
                                                    </div>
                                                </CardContent>

                                                <div className="flex justify-between gap-4 px-8">
                                                    <h3 className="text-lg font-bold">{productoNombre}</h3>

                                                    <div className="flex items-center justify-between gap-3">
                                                        <p className="px-2 py-1 text-white bg-black rounded-full dark:bg-white dark:text-black w-fit">{precio}<span className="font-bold">$</span></p>
                                                    </div>


                                                </div>

                                            </Card>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext className="hidden sm:flex"/>

                </Carousel>
            </div>
        );
    };

    export default FeaturedProducts;