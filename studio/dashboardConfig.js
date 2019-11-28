export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5de038aec2685a678915f273',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-at21wvjm',
                  apiId: '5eb696e5-dc53-40ec-9c88-5131fffdfbd9'
                },
                {
                  buildHookId: '5de038ae63eafdfd8ac632e7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3w3a4srm',
                  apiId: '09d0d51a-4594-4806-91d2-ba690e87b036'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/carlbradbury79/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-3w3a4srm.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
