import { Waifu } from "../models/waifus";

const baseUrl: string = "https://api.waifu.im/";

export async function fetchWaifus(): Promise<Waifu[]> {
  const response = await fetch(baseUrl + "random", { mode: "no-cors" });
  const waifus: Waifu[] = await response.json();
  return waifus;
}


