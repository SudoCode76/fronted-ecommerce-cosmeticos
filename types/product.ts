export type ProductType = {
    id: number;
    documentId: string;
    productoNombre: string;
    slug: string;
    descripcion: string;
    active: boolean;
    isFeatured: boolean;
    precio: number;
    images: {
        id: number;
        documentId: string;
        url: string;
        formats: {
            small: {
                url: string;
            };
            medium: {
                url: string;
            };
            thumbnail: {
                url: string;
            };
        };
    }[];
    categoria: {
        data: {
            attributes: {
                slug: string;
                categoriaNombre: string;
            };
        };
    } | null;
};