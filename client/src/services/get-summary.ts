type SummaryType = {
	completed: number;
	total: number;
	goalsPerDay: Record<
		string,
		{
			id: string;
			title: string;
			completedAt: string;
		}[]
	>;
};

export async function GetSummary(): Promise<SummaryType> {
	const API_URL = import.meta.env.VITE_API_URL;
	const response = await fetch(`${API_URL}/summary`);
	const data = await response.json();

	return data.summary;
}
