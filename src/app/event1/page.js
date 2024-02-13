import React from "react";
import TemplatePageEvent from "@/components/TemplatePageEvent/TemplatePageEvent";

const HomePage = () => {
	const eventInfo = {
	  title: 'Rocktitude',
	  text: 'Rejoignez l’aventure Rocktitude, le festival où le rock et le métal fusionnent pour donner vie à une expérience sonore sans précédent. Ne manquez pas cette occasion unique le 03 et 04 Mai 2025 de midi à minuit, pour des moments de pur frisson musical qui marqueront les esprits.',
	  images: [
		{ src: '/rockCard.jpg', alt: 'Festival At Night' },
		{ src: '/rock-concert.jpg', alt: 'Concert Crowd' },
		{ src: '/rock-festival.jpg', alt: 'Stage Performance' },
	  ],
	  bandTitle: 'Band',
	  bandList: [
		'Thunderstrike',
		'Iron Vortex',
		'Velvet Rebellion',
		'Spectral Fire',
		'The Crimson Shadows',
		'Eclipse Eternal',
		'Neon Knights',
		'Blackened Souls',
		'Rift Riders',
		'Serpent\'s Tongue',
		'Wraith Dominion',
		'Celestial Ruin',
		'Phantom\'s Cry',
		'Abyssal Echo',
		'Forge of Titans'
	  ],
	};
  
	return <TemplatePageEvent {...eventInfo} />;
  };
  
  export default HomePage;
