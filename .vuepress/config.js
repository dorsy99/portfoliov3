module.exports = {
    title: "Andrew Albury-Dor",
    description: "Javascript, ServiceNow, Vue (maybe) and blog.",
    theme: '@vuepress/theme-blog',

    themeConfig: {
        modifyBlogPluginOptions(blogPluginOptions) {
            const sitemap = {
              hostname: 'https://yourdomain'
            }

            blogPluginOptions.directories[0].path = '/blog/'
            blogPluginOptions.directories[0].itemPermalink = '/blog/:year/:month/:day/:slug'
            /*
            const comment = {
              // service: 'disqus',
              // shortname: 'disqus-shortname',
              // service: 'vssue',
              // owner: 'You',
              // repo: 'Your repo',
              // clientId: 'Your clientId',
              // clientSecret: 'Your clientSecret',
            }*/
      
            return { ...blogPluginOptions, sitemap /*, comment */ }
          },

        nav: [
            {
                text: 'Home',
                link: '/',
            },
/*             {
                text: 'Tags',
                link: '/tag/',
            }, */
            {
                text: 'Work',
                link: 'work.html',
            },
            {
                text: 'Blog',
                link: '/blog/',
            },
        ],
        footer: {
            contact: [
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
    },
}