const path = require(`path`);

const makeRequest = (graphql, request) => new Promise ((resolve, reject) => {
  resolve(graphql(request).then( result => {
    if (result.errors){
      reject(result.errors)
    }
      return result;
    }
  ))
})

// exports.createPages = ({ boundActionCreators, graphql }) => {
//   const { createPage } = boundActionCreators;

//   const getJobs = makeRequest(graphql, `
//     {
//       allStrapiJobs {
//         edges {
//           node {
//             id
//           }
//         }
//       }
//     }
//     `).then(result => {
//     // Create pages for each article.
//     result.data.allStrapiJobs.edges.forEach(({ node }) => {
//       createPage({
//         path: `/${node.id}`,
//         component: path.resolve(`src/pages/experience.js`),
//         context: {
//           id: node.id,
//         },
//       })
//     })
//   });

//   // Queries for articles and authors nodes to use in creating pages.
//   return Promise.all([
//     getJobs
//   ])
// };
