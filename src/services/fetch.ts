import { Waifu } from "../models/index";

const baseUrl: string = "https://api.waifu.im/";

export async function fetchWaifus(): Promise<Waifu[]> {
  const response = await fetch(baseUrl + "random", { mode: "no-cors" });
  const waifus = await response.json();
  return waifus;
}