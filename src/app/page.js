import Image from "next/image";
import Styles from "./home.module.css";
import Card from "@/components/card/Card";

export default function Home() {
	return (
		<main>
			<Card
				title="Profile 1"
				description="sdfgsdfghjksdjk;fhalsdjkfgsluifgsldyfgsdleuyfg"
				isProfile
			/>

			<Card
				title="Profile"
				description="sdfgsdfghjksdjk;fhalsdjkfgsluifgsldyfgsdleuyfg"
				isProfile
			/>
			<Card
				title="Evenement"
				description="sdfgsdfghjksdjk;fhalsdjkfgsluifgsldyfgsdleuyfg"
			/>
		</main>
	);
}
