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
                text: 'Resume',
                link: '/resume/',
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
        alias: {
            "@assets": path.resolve(__dirname, "../assets")
        },
    },

    plugins: [
        [
            '@vuepress/google-analytics',
            {
                'ga': 'UA-337145-18' // UA-00000000-0
            }
        ],
    ],
    head: [
        ['script', {}, `
        
function dateDiff(startingDate, endingDate) {
  var startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
  if (!endingDate) {
      endingDate = new Date().toISOString().substr(0, 10);    // need date in YYYY-MM-DD format
  }
  var endDate = new Date(endingDate);
  if (startDate > endDate) {
      var swap = startDate;
      startDate = endDate;
      endDate = swap;
  }
  var startYear = startDate.getFullYear();
  var february = (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0 ? 29 : 28;
  var daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  var yearDiff = endDate.getFullYear() - startYear;
  var monthDiff = endDate.getMonth() - startDate.getMonth();
  if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
  }
  var dayDiff = endDate.getDate() - startDate.getDate();
  if (dayDiff < 0) {
      if (monthDiff > 0) {
          monthDiff--;
      } else {
          yearDiff--;
          monthDiff = 11;
      }
      dayDiff += daysInMonth[startDate.getMonth()];
  }

  return yearDiff + ' Years, ' + monthDiff + ' Months and ' + dayDiff + ' Days';
}
    `]
    ]
}