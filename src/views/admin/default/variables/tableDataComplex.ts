type RowObj = {
	name: string;
	status: string;
	date: string;
	progress: number;
};

const tableDataComplex: RowObj[] = [
	{
		name: 'Node Server',
		progress: 100.0,
		status: 'Finalizado',
		date: '12 Jan 2021'
	},
	{
		name: 'Frontend',
		progress: 25.5,
		status: 'Em Progresso',
		date: '21 Feb 2021'
	},
];
export default tableDataComplex;
