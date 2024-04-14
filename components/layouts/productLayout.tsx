import React, { PropsWithChildren } from "react";

export const ProductLayout = (props: PropsWithChildren) => {
	return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">{props.children}</div>;
};