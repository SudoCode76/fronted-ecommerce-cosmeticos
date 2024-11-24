import { cn } from "@/lib/utils";


interface IconButtonPropos {
    onclick: () => void,
    icon: React.ReactElement
    className?: string
}

const IconButton = (propos: IconButtonPropos) => {
    const { onclick, icon, className } = propos;
    return (
        <button onClick={onclick} 
        className={cn("rounded-full flex items-center bg-white border shadow-md p-2 hover:scale-110 transition", className)}>
        {icon}
        </button>
    );
}

export default IconButton ;