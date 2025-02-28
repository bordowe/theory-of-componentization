import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: "ToC",
    tagline: "Theory of Componentization",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://toc.bordowe.pl",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "bordowe", // Usually your GitHub org/user name.
    projectName: "toc", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en", "pl"],
        localeConfigs: {
            en: {
                path: "en",
            },
            pl: {
                path: "pl",
            },
        },
    },

    presets: [
        [
            "classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.ts"),
                    routeBasePath: "/",
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        docs: {
            sidebar: {
                hideable: true,
                autoCollapseCategories: true,
            },
        },
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
            title: "ToC",
            logo: {
                alt: "Bordowe Logo",
                src: "img/logo.svg",
                srcDark: "img/logo-dark.svg",
            },
            items: [
                {
                    type: "localeDropdown",
                    position: "right",
                },
            ],
        },
        footer: {
            style: "light",
            copyright: `Copyright © ${new Date().getFullYear()} <a href="https://bordowe.pl">Bordowe</a>. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
}

export default config
