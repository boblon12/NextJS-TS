export interface ITableItem {
	_id: string;
	editUrl: string;
	items: string[];
	email: string;
}

export interface IAdminTableItem {
	tableItem: ITableItem;
	removeHandler: (id: string) => void;
}
