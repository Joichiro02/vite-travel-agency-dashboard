import { Header } from "components";

export default function Dashboard() {
	const user = { name: "Adrian" };
	return (
		<main className="dashboard wrapper">
			<Header
				title={`Welcome ${user?.name ?? "Guest"} 👋`}
				description="Track activity, trends and popular destinations in real time"
			/>
			Dashboard Page Contents
		</main>
	);
}
