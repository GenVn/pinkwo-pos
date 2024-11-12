import { Bundle } from "@/types/type";

export async function fetchBundles(): Promise<Bundle> {
  let headersList = {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  };
  try {
    const response = await fetch(
      "https://api.pinkwo.com/gc-product-catalog-service/api/v1/bundles/?page=0&size=20",
      {
        headers: headersList,
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch bundles");
    }
    const data: Bundle = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
