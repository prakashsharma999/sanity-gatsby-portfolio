export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5edfbd841b3d525b2bcfb515',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-fq51sdyf',
                  apiId: 'd3da7ae3-4607-4e69-b9a4-b7fac4ebdcb9'
                },
                {
                  buildHookId: '5edfbd85a20c5e58c3a15800',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-zbumxcsx',
                  apiId: '18cbb357-82ec-4282-b1dc-17766f613e93'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prakashsharma999/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-zbumxcsx.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
