export interface navLinkItem {
	text: string;
	link: string;
	newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
}

export interface navDropdownItem {
	text: string;
	dropdown: navLinkItem[];
}

export type navItem = navLinkItem | navDropdownItem;

// note: 1 level of dropdown is supported
const navConfig: navItem[] = [
	{
		text: "Home",
		link: "/horizon",
	},
	{
		text: "portfolios",
		link: "/horizon/portfolio",
	},
	{
		text: "Pricing",
		link: "/horizon/#pricing",
	},
	{
		text: "Pages",
		dropdown: [
			{
				text: "Portfolio",
				link: "/horizon/portfolio/couple-1",
			},
			{
				text: "Legal",
				link: "/horizon/privacy-policy/",
			},
			{
				text: "Elements",
				link: "/horizon/elements/",
			},
			{
				text: "404",
				link: "/horizon/not-a-link/",
			},
		],
	},
];

export default navConfig;
