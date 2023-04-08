export interface IProductState {
	data: {
		products: IProduct[],
	},
	pagination: {
		current: number,
		limit: number,
		total: number,
	},
	isLoading: boolean,
	filters: {
		current: null | string,
	}
}

export interface IProduct {
	name: string;
	type: string;
	img: string;
	subType: string;
	status: 'inStock' | 'onOrder' | 'outOfOrder';
	features: Record<string, number|string> | null;
	price: string | null;
}
