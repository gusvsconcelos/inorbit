interface CreateGoalRequest {
	title: string;
	desiredWeeklyFrequency: number;
}

export async function createGoal({
	title,
	desiredWeeklyFrequency,
}: CreateGoalRequest) {
	const API_URL = import.meta.env.VITE_API_URL;

	await fetch(`${API_URL}/goals`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			title,
			desiredWeeklyFrequency,
		}),
	});
}
