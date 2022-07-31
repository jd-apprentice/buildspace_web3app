export interface Tag {
  tag_id: number;
  name: string;
  is_nsfw: boolean;
  description: string;
}

export interface Abi {
  inputs: [];
  stateMutability: string;
  type: string;
}

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

export interface Waifu {
  images: WaifuImages[];
}

export interface ContainerType {
  contractAddress: string;
}

export type ExternalProvider = {
  isMetaMask?: boolean;
  isStatus?: boolean;
  host?: string;
  path?: string;
  sendAsync?: (request: { method: string, params?: Array<any> }, callback: (error: any, response: any) => void) => void
  send?: (request: { method: string, params?: Array<any> }, callback: (error: any, response: any) => void) => void
  request?: (request: { method: string, params?: Array<any> }) => Promise<any>
}
