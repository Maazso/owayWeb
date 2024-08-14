import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_8734213d.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"draft":false,"name":"Maaz jedh","title":"Founder & CEO","avatar":{"src":"https://demo-source.imgix.net/puppy.jpg?&fit=crop&w=280","alt":"Robert Palmer"},"publishDate":"2022-11-09 15:39"};
				const file = "/Users/roberto/Desktop/AI_Secartery/owayWeb/src/content/team/robert-palmer.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
