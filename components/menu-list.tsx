"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



const MenuList = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre Nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Velvet Beauty
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Velvet Beauty es tu tienda online de cosméticos y cuidado personal. Descubre productos de alta calidad, tendencias de belleza, y consejos para realzar tu estilo único. Comprometidos con la sostenibilidad y la autenticidad, te ofrecemos una experiencia de compra fácil y confiable. Velvet Beauty: belleza con confianza.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Tienda">
                Accede a toda tu informacion, tus pedidos y mucho mas
              </ListItem>
              <ListItem href="/offers" title="Ofertas">
                Promociones y descuentos especiales.
              </ListItem>
              <ListItem href="/" title="Accesorios">
                Productos extra.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {categories.map((categories) => (
                <ListItem
                  key={categories.title}
                  title={categories.title}
                  href={categories.href}
                >
                  {categories.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <Link href="/accesorios" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Accesorios
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default MenuList

const categories: { title: string; href: string; description: string }[] = [
    {
      title: "Maquillaje",
      href: "/category/maquillaje",
      description:
        "Explora labiales, bases, sombras y más para crear looks únicos.",
    },
    {
      title: "Cuidado de la piel",
      href: "/category/cuidado-de-la-piel",
      description:
        "Productos diseñados para hidratar, limpiar y rejuvenecer tu piel.",
    },
    {
      title: "Cuidado del cabello",
      href: "/category/cuidado-del-cabello",
      description:
        "Shampoos, acondicionadores y tratamientos para un cabello sano y radiante.",
    },
    {
      title: "Fragancias",
      href: "/category/fragancias",
      description:
        "Encuentra perfumes y lociones que reflejan tu esencia personal.",
    },
    {
      title: "Accesorios",
      href: "/category/accesorios",
      description:
        "Brochas, esponjas y herramientas esenciales para tu rutina de belleza.",
    },
    {
      title: "Sets y regalos",
      href: "/category/sets-y-regalos",
      description:
        "Los mejores kits y sets ideales para regalar o consentirte.",
    },
  ];
  

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"


