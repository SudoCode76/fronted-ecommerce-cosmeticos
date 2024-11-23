import { Menu } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

const ItemMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu />
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categorias/maquillaje" className="block">Maquillaje</Link>
                <Link href="/categorias/cuidado-de-la-piel" className="block">Cuidado de la piel</Link>
                <Link href="/categorias/cuidado-del-cabello" className="block">Cuidado del cabello</Link>
                <Link href="/categorias/fragancias" className="block">Fragancias</Link>
                <Link href="/categorias/accesorios" className="block">Accesorios</Link>
                <Link href="/categorias/sets-y-regalos" className="block">Sets y regalos</Link>
            </PopoverContent>
        </Popover>
    );
};

export default ItemMenuMobile;
