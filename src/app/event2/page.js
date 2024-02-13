import TemplatePageEvent from "@/components/TemplatePageEvent/TemplatePageEvent";
import React from "react";

const HomePage = () => {
	const eventInfo = {
	  title: 'Poptastic',
	  text: 'Plonger dans Poptastic, l\'événement phare du hip-hop qui célèbre la créativité, les rythmes et les flows qui définissent la culture urbaine contemporaine. Réservez vos place le 08-09-10 décembre 2025 de 14 à minuit pour une expérience musicale qui promet de rassembler les meilleurs talents du hip-hop, offrant une aventure inoubliable.',
	  images: [
		{ src: '/street-dancer-2901900_1280.jpg', alt: 'Festival At Night' },
		{ src: '/femme-hip-hop-card.jpg', alt: 'Concert Crowd' },
		{ src: '/groupe-hip-hop.jpg', alt: 'Stage Performance' },
	  ],
	  bandTitle: 'Artiste',
	  bandList: [
		'Mc Visionairy',
		'Flow Genesis',
		'Rhythm Sage',
		'Lyric Mystic',
		'Beat Architect',
		'Urban Streets',
		'Sonic Pulse',
		'Vibe Conductor',
		'Groove',
		'Odyssey',
		'Harmony',
		'Track Titan',
		'Cipher',
		'Snoop Dog',
		'50 Cent',
		'Lil Wayne',
		'Kendrick Lamar',
		'Eminem'
	  ],
	};
  
	return <TemplatePageEvent {...eventInfo} />;
  };
  
  export default HomePage;