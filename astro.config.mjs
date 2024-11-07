// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Курс по Flutter',
			description: 'Документация проекта.',
			social: {
				github: 'https://github.com/pitus-flutter-course/flutter_course_docs',
			},
			sidebar: [
				{
					label: 'Лекции',
					autogenerate: { directory: 'Лекции' },
				},
				{
				  label: 'Flutter',
				  autogenerate: { directory: 'Flutter' },
				},
			  ],
		}),
	],
	base: '/docs',
	markdown: {
		rehypePlugins: [rehypeAstroRelativeMarkdownLinks],
	  },
});
