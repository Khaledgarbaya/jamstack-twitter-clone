exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions

  if (page.path.match(/^\/app\//)) {
    page.matchPath = '/app/*'
    createPage(page)
  }
}
