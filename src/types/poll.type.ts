// Guest of the poll that will receive percentage of the payout
export interface Guest {
	owner: boolean;
	nameOrAddress: string;
	splitPercent: string;
}
