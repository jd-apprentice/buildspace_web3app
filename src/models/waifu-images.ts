import { Tag } from "./tag";

export interface WaifuImages {
    file: string;
    extension: string;
    image_id: number;
    like: number;
    dominant_color: string;
    source: string;
    uploaded_at: string;
    url: string;
    tags: Tag[];
}