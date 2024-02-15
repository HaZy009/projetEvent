import Image from "next/image";
import Styles from "./home.module.css";
import Card from "@/components/card/Card";
import TemplatePage from "@/components/templatePage/TemplatePage";

const description =
	"Bienvenue sur le site de Festall, votre partenaire incontournable pour des expériences musicales inoubliables. Plongez au cœur de festivals exceptionnels, où passion, créativité et rencontres transforment chaque moment en une aventure mémorable. Rejoignez-nous pour célébrer la vie et la musique sous toutes ses formes.";
export default function Home() {

	
	return (
		<main className={Styles.container}>
			
			<>
			<TemplatePage
				title=""
				description={description}
				src="/photoFestivalHome.jpg"
				
			/>
		</>

			
			<div className={Styles.containerCard}>
				
			<Card
			src = "/festival-contact-1.jpg"
				description="Plongez dans l'univers de Rocktitude
				l'evenement heavy metal ultime."
				
			/>

			<Card
			src = "/femme-hip-hop-card.jpg"
				description="Emmergez-vous 
				    dans Poptastic,
				   l'éclat du hip-hop
				       moderne."
				
			/>
			<Card
			src = "/contact-card.jpg"
				description="Besoin d'assistance ?
				contactez-nous!"
				isProfile
			/>
			</div>
		</main>
	);
}
