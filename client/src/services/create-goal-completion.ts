export async function createGoalCompletion(goalId: string) {
	const API_URL = import.meta.env.VITE_API_URL;

	await fetch(`${API_URL}/completions`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			goalId,
		}),
	});
}
