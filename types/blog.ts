export type Blog = {
    id: number;
    body: string;
    title: string;
    tags: Tag[];
    image: {
        url: string;
        height: number;
        width: number;
    }
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
};

export type Tag = {
    id: number;
    tag: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    revisedAt: string;
};
