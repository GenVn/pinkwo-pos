import { BundleDetail } from "@/types/type";

export async function fetchBundleDetail(
  bundleId: number
): Promise<BundleDetail> {
  let headersList = {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  };
  try {
    const response = await fetch(
      `https://api.pinkwo.com/gc-product-catalog-service/api/v1/bundles/${bundleId}`,
      {
        headers: headersList,
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch bundles");
    }
    const data: BundleDetail = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}
