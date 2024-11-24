export type CategoryType = {
    id: number;
    documentId: string;
    categoriaNombre: string;
    descripcionCategoria: string;
    slug: string;
    mainImage: {
        id: number;
        documentId: string;
        url: string;
        formats: {
            large: {
                url: string;
            };
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
    };
};