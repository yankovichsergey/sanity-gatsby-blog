export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f86c39c9fae7e90c4457d19',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-k2pa8oks',
                  apiId: '72b9336c-263c-47d5-9079-f5029112ac81'
                },
                {
                  buildHookId: '5f86c39ca05d0d9379057bd2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-8bb2fgeu',
                  apiId: '1a5f70f7-5dc1-4f0b-ac9a-2aaaca090e10'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/yankovichsergey/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-8bb2fgeu.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
