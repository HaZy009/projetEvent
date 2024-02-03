import TemplatePage from "@/components/templatePage/TemplatePage";
import React from "react";

const tab = [
	{
		title: "hksdfsdjklfhasjklfh",
		description: "sdfghsdf;gjklhsdfgjkhasdkfgj",
		image: "sdfgsdfg  ",
	},
];

const description =
	"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, suscipit delectus? Quis ex repudiandae corrupti hic magnam facere non deserunt fuga maxime? Quis, eligendi aut? Asperiores distinctio accusantium quod? Aperiam!";

const Event1 = () => {
	return (
		<>
			<TemplatePage
				title="Page evenement 1"
				description={description}
				src="/artist.jpg"
				textBouton1="Voir plus"
			/>
		</>
	);
};

export default Event1;
