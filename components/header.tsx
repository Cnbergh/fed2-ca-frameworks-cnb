import Link from "next/link";

export const Header = () => {
	return (
		<div className="w-full bg-secondary justify-center flex gap-x-4 border-b py-3">
			<div>
			<Link
				className="transition-all duration-300 ease-linear hover:bg-gray-200 bg-gray-300 text-gray-800 px-4 py-2 rounded-md mt-4"
				href="/"
			>
				Home
			</Link>
			<Link
				className="transition-all duration-300 ease-linear hover:bg-gray-200 bg-gray-300 text-gray-800 px-4 py-2 rounded-md mt-4"
				href="/products"
			>
				Products
			</Link>
			<Link
				className="transition-all duration-300 ease-linear hover:bg-gray-200 bg-gray-300 text-gray-800 px-4 py-2 rounded-md mt-4"
				href="/contact"
			>
				Contact
			</Link>
			<Link
				className="transition-all duration-300 ease-linear hover:bg-gray-200 bg-gray-300 text-gray-800 px-4 py-2 rounded-md mt-4"
				href="/checkout"
			>
				Cart
			</Link>
			</div>
		</div>
	);
};