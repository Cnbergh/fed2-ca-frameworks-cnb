import { Product } from "@/app/products/page";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export interface ProductModalProps {
	product?: Product;
	productId?: string;
	onClose: () => void;
  }


export function stringOrUndefined(value: string | string[] | undefined): string | undefined {
	return value === undefined ? undefined : Array.isArray(value) ? value[0] : value.toString();
  }