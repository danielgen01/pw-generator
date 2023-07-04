import Image from "next/image"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import History from "./components/History/History"

export default function App() {
	return (
		<>
			<Header />
			<main className="grid grid-cols-1 lg:grid-cols-3">
				<Hero />
				<History />
			</main>

			<footer></footer>
		</>
	)
}
