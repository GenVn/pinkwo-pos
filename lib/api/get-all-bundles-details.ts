import { BundleDetail, Bundle } from "@/types/type";
import { fetchBundles } from "./get-bundles";

export async function fetchAllBundleDetails(): Promise<BundleDetail[]> {
  let headersList = {
    Accept: "application/json",
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
  };

  try {
    // First, fetch all bundles
    const bundles: Bundle = await fetchBundles();

    // Then, fetch details for each bundle
    const promises = bundles.data.map((bundle) =>
      fetch(
        `https://api.pinkwo.com/gc-product-catalog-service/api/v1/bundles/${bundle.id}`,
        {
          headers: headersList,
        }
      ).then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch bundle detail for ID ${bundle.id}`);
        }
        return response.json();
      })
    );

    const bundleDetails = await Promise.all(promises);
    return bundleDetails;
  } catch (error) {
    console.error("Error fetching bundle details:", error);
    throw error;
  }
}
