import { baseUrl } from "../const";
import { Waifu } from "../models/index";

export async function fetchWaifus(): Promise<Waifu[]> {
  const response = await fetch(baseUrl + "random", { mode: "no-cors" });
  const waifus = await response.json();
  return waifus;
}