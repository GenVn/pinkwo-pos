interface ProductItem {
  id: number;
  name: string;
  description: string;
  brand: string;
  origin: string;
  price: number;
  groupId: number;
  isDefault: boolean;
}

export interface Product {
  data: ProductItem[];
  total: number;
}

interface BundleItem {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  erpId: string;
  status: "INACTIVE" | "ACTIVE";
  categoryId: number;
}

export interface Bundle {
  data: BundleItem[];
  total: number;
}

interface BundleProduct {
  data: {
    id: number;
    name: string;
    isMultiSelect: boolean;
  };
  total: number;
}

interface BundleGroup {
  id: number;
  name: string;
  isMultiSelect: boolean;
  values: string;
  products: {
    id: number;
    name: string;
    price: number;
    isDefault: boolean;
  }[];
}

export interface BundleDetail {
  bundle: BundleItem;
  groups: BundleGroup[];
}
