/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, h as renderSlot, i as renderComponent } from '../astro_8734213d.mjs';
import 'clsx';
import { a as $$Container, $ as $$Layout } from './404_1f2a768b.mjs';
import { $ as $$Icon } from './contact_240701a9.mjs';
import { a as $$Picture } from './about_08f5e75d.mjs';

const $$Astro$1 = createAstro("https://oway.info");
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    href,
    block,
    size = "lg",
    style = "primary",
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    lg: "px-5 py-2.5",
    md: "px-4 py-2"
  };
  const styles = {
    outline: "bg-white border-2 border-black hover:bg-gray-100 text-black ",
    primary: "bg-black text-white hover:bg-gray-800  border-2 border-transparent",
    inverted: "bg-white text-black   border-2 border-transparent",
    muted: "bg-gray-100 hover:bg-gray-200   border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/roberto/Desktop/AI_Secartery/owayWeb/src/components/ui/link.astro", void 0);

const $$Cta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-[#1C3D48] p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"> <h2 class="text-white text-4xl md:text-6xl tracking-tight">
Accelerate your workflow
</h2> <p class="text-slate-400 mt-4 text-lg md:text-xl">
Effortlessly manage and optimize your emails with OWAY's intelligent, high-performance architecture.
</p> <div class="flex mt-5"> ${renderComponent($$result, "Link", $$Link, { "href": "#", "style": "inverted" }, { "default": ($$result2) => renderTemplate`Get Started` })} </div> </div>`;
}, "/Users/roberto/Desktop/AI_Secartery/owayWeb/src/components/cta.astro", void 0);

const $$Features = createComponent(($$result, $$props, $$slots) => {
  const features = [
    {
      title: "Smart Email Organization",
      description: "OWAY intelligently categorizes and prioritizes your emails, ensuring you never miss an important message.",
      icon: "bx:bxs-inbox"
    },
    {
      title: "Auto Reply",
      description: "Save time with OWAY\u2019s auto-reply feature, which crafts personalized responses based on your preferences.",
      icon: "bx:bxs-message-square-dots"
    },
    {
      title: "Efficient Email Delegation",
      description: "Easily delegate emails to team members with OWAY\u2019s quick and intuitive delegation tools.",
      icon: "bx:bxs-user-check"
    },
    {
      title: "Snooze and Reminders",
      description: "Snooze emails for later and receive timely reminders, helping you manage follow-ups effortlessly.",
      icon: "bx:bxs-alarm-snooze"
    },
    {
      title: "Advanced Email Search",
      description: "Quickly find any email with OWAY\u2019s powerful search capabilities, making your inbox more navigable.",
      icon: "bx:bxs-search"
    },
    {
      title: "Customizable Workflows",
      description: "Tailor OWAY to fit your unique workflow with customizable rules and automation options.",
      icon: "bx:bxs-cog"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-16 md:mt-0"> <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
Everything you need for your business success
</h2> <p class="text-lg mt-4 text-slate-600">
OWAY comes fully equipped with powerful features. It combines cutting-edge
    AI technology with seamless integration, delivering a smarter, more
    efficient email experience.
</p> </div> <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16"> ${features.map((item) => renderTemplate`<div class="flex gap-4 items-start"> <div class="mt-1 bg-black rounded-full  p-2 w-8 h-8 shrink-0"> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-white", "name": item.icon })} </div> <div> <h3 class="font-semibold text-lg">${item.title}</h3>${" "} <p class="text-slate-500 mt-2 leading-relaxed">${item.description}</p> </div> </div>`)} </div>`;
}, "/Users/roberto/Desktop/AI_Secartery/owayWeb/src/components/features.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/hero.6fdd0dc6.png","width":520,"height":424,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://oway.info");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24"> <div class="py-6 md:order-1 hidden md:block"> ${renderComponent($$result, "Picture", $$Picture, { "src": heroImage, "alt": "Astronaut in the air", "widths": [200, 400, 600], "sizes": "(max-width: 800px) 100vw, 620px", "loading": "eager", "format": "avif" })} </div> <div> <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
AI-Powered Email Assistant
</h1> <p class="text-lg mt-4 text-slate-600 max-w-xl">
OWAY is an advanced AI-powered email assistant designed to revolutionize
      the way you manage your inbox. Tailored for professionals and businesses,
      OWAY offers intelligent email management, streamlined communication, and
      automated workflows.
</p> <div class="mt-6 flex flex-col sm:flex-row gap-3"> <!-- <Link
        href="#"
        href="https://web3templates.com/templates/astroship-starter-website-template-for-astro"
        target="_blank"
        class="flex gap-1 items-center justify-center"
        rel="noopener">
        <Icon class="text-white w-5 h-5" name="bx:bxs-cloud-download" />

        Download for Free
      </Link> --> <!-- <Link
        size="lg"
        style="outline"
        rel="noopener"
        href="https://github.com/surjithctly/astroship"
        class="flex gap-1 items-center justify-center"
        target="_blank">
        <Icon class="text-black w-4 h-4" name="bx:bxl-github" />
        GitHub Repo
      </Link> --> </div> </div> </main>`;
}, "/Users/roberto/Desktop/AI_Secartery/owayWeb/src/components/hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${renderComponent($$result3, "Features", $$Features, {})}  ${renderComponent($$result3, "Cta", $$Cta, {})} ` })} ` })}`;
}, "/Users/roberto/Desktop/AI_Secartery/owayWeb/src/pages/index.astro", void 0);

const $$file = "/Users/roberto/Desktop/AI_Secartery/owayWeb/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Link as $, index as i };
