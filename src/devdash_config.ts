export interface DevDashConfig {
	github_access_token: string;
	widgets: {
		id: string;
		repository_url: string;
	}[];
}

export const config: DevDashConfig = {
	//github_access_token: process.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN as string,
  github_access_token: import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN as string,
	widgets: [
		{
			id: "2565fa91-2ac4-4e4f-9111-6d27a598082d",
			repository_url: "https://github.com/CodelyTV/dotly",
		},
		{
			id: "a66d5092-5ba6-4184-9931-cc485defe412",
			repository_url: "https://github.com/CodelyTV/eslint-plugin-hexagonal-architecture",
		},
		{
			id: "7c7a6b71-76dc-42ce-a46b-1730fc758193",
			repository_url: "https://github.com/CodelyTV/refactoring-code-smells",
		},
    {
			id: "d9312e41-317e-474e-a545-45a48728623b",
			repository_url: "https://github.com/CodelyTV/php-ddd-example",
		},
    {
			id: "5c821104-9477-4d43-8b13-2731a7e27376",
			repository_url: "https://github.com/CodelyTV/typescript-ddd-example",
		},
    {
			id: "4f25e936-0928-441d-b643-e2844741b98b",
			repository_url: "https://github.com/CodelyTV/elastic-stack-example",
		},
    {
			id: "b1724352-e1a2-467c-b844-050248104423",
			repository_url: "https://github.com/CodelyTV/java-basic-skeleton",
		},
    {
			id: "e2a97901-248b-4d47-a296-431957143904",
			repository_url: "https://github.com/CodelyTV/color-schemes",
		},
	],
};