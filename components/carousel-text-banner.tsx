"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay"


export const dataCarouselTop = [
    {
        id: 1,
        title: "Cuida tu piel con entrega rápida",
        description: "Recibe tus productos favoritos en 24/48 horas y luce una piel radiante.",
        link: "#!"
    },

    {
        id: 2,
        title: "Productos Premium para ti",
        description: "Como cliente premium, disfruta de envíos rápidos y exclusivos beneficios.",
        link: "#!"
    },

    {
        id: 3,
        title: "Belleza a tu puerta",
        description: "Descubre nuestra línea de cosméticos y recíbelos en tiempo récord.",
        link: "#!"
    },

    {
        id: 4,
        title: "Confianza en cada entrega",
        description: "Tu rutina de belleza, siempre a tiempo con envíos en 24/48 horas.",
        link: "#!"
    }
]

const CarouselTextBanner = () => {
    const router = useRouter()

    return (
        <div className="bg-gray-200 dark:bg-primary">
           <Carousel className="w-full max-w-4xl mx-auto"
           plugins={[
                Autoplay({
                    delay: 2000
                })
           ]}
           >

           <CarouselContent>
            {dataCarouselTop.map(({id, title, link, description}) =>(
                <CarouselItem key={id} onClick={() => router.push(link)} className="cursor-pointer">
                    <div>
                        <Card className="shadow-none border-none bg-transparent">
                            <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                                <p className="sm:text-lg text-wrap dark:text-secondary">{title}</p>
                                <p className="text-xs sm:text-sm text-wrap dark:text-secondary">{description}</p>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            ))}
            </CarouselContent>
           </Carousel>
           
        </div>
    );
}

export default CarouselTextBanner ;