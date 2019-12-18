const path = require("path");
require('dotenv').config();

module.exports = {
    title: "Andrew Albury-Dor",
    description: "Javascript, ServiceNow, Vue (maybe) and blog.",
    theme: '@vuepress/theme-blog',
    sidebar: true,

    themeConfig: {
        modifyBlogPluginOptions(blogPluginOptions) {
            const sitemap = {
                hostname: 'https://yourdomain'
            };

            blogPluginOptions.directories[0].path = '/blog/'
            blogPluginOptions.directories[0].itemPermalink = '/blog/:year/:month/:day/:slug'

            const comment = {
                service: 'vssue',
                autoCreateIssue: true,
                prefix: "[Post]",
                owner: 'dorsy99',
                repo: 'portfolioV3',
                clientId: '68215883a0f022aee1b1',
                clientSecret: process.env.GHSECRET,
            }
            return {...blogPluginOptions, sitemap, comment }
        },

        nav: [{
                text: 'Home',
                link: '/',
            },
            /*             {
                        text: 'Tags',
                        link: '/tag/',
                    }, */
            {
                text: 'Resumé',
                link: '/resume/',
            },
            {
                text: 'Blog',
                link: '/blog/',
            },
        ],
        footer: {
            contact: [
                {
                    type: 'linkedin',
                    link: 'https://www.linkedin.com/in/andrewalburydor/',
                },
                {
                    type: 'mail',
                    link: 'mailto:andrewalburydor@gmail.com',
                },
                {
                    type: 'github',
                    link: 'https://github.com/dorsy99',
                },
                {
                    type: 'twitter',
                    link: 'https://twitter.com/dorsy99',
                },
            ],
            copyright: [
                {
                    text: 'Copyright © 2019 Andrew Albury-Dor',
                    link: '',
                },
            ],
        },
        alias: {
            "@assets": path.resolve(__dirname, "../assets")
        },
    },

    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': process.env.GA // UA-00000000-0
            }
        ],
    ],
}