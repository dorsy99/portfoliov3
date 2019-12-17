const path = require("path");
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
                //service: 'disqus',
                //shortname: 'andrewalburydor',
                service: 'vssue',
                autoCreateIssue: true,
                prefix: "[Post]",
                owner: 'dorsy99',
                repo: 'portfolioV3',
                clientId: '68215883a0f022aee1b1',
                clientSecret: 'f95a5d7e7bb6e9070449f05613bec1fd22385b3c',
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
                text: 'Work',
                link: '/work/',
            },
            {
                text: 'Blog',
                link: '/blog/',
            },
        ],
        footer: {
            contact: [{
                    type: 'github',
                    link: 'https://github.com/dorsy99',
                },
                {
                    type: 'twitter',
                    link: 'https://twitter.com/dorsy99',
                },
            ],
            copyright: [{
                    text: 'Privacy Policy',
                    link: 'https://policies.google.com/privacy?hl=en-US',
                },
                {
                    text: 'MIT Licensed | Copyright © 2018-present Vue.js',
                    link: '',
                },
            ],
        },

        /*modifyBlogPluginOptions(blogPlugnOptions) {
          const writingDirectoryClassifier = {
            id: 'blog',
            dirname: '_posts',
            path: '/blog/',
            layout: 'IndexPost',
            itemLayout: 'Post',
            itemPermalink: '/blog/:year/:month/:day/:slug',
            pagination: {
              perPagePosts: 5,
            },
          }
          
          blogPlugnOptions.directories.push(writingDirectoryClassifier)
          return blogPlugnOptions
        },
        //},*/
        /*alias: {
            "@assets": path.resolve(__dirname, "../assets")
        },*/
    },

    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-337145-18' // UA-00000000-0
            }
        ],
    ],
    configureWebpack: {
        resolve: {
          alias: {
            '@assets': '/assets/'
          }
        }
      }
}