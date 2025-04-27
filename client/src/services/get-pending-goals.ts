type PendingGoalsResponse = {
	id: string;
	title: string;
	desiredWeeklyFrequency: number;
	completionCount: number;
}[];

export async function GetPendingGoals(): Promise<PendingGoalsResponse> {
	const API_URL = import.meta.env.VITE_API_URL;

	const response = await fetch(`${API_URL}/pending-goals`);
	const data = await response.json();

	return data.pendingGoals;
}
