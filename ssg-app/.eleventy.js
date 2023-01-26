module.exports = function(eleventyConfig) {

    eleventyConfig.addGlobalData(
        "allBlogPosts",
        () => {
            return new Promise((resolve) => {
                fetch('https://lorem-ipsum-tau.vercel.app/api/lorem')
                    .then(res => res.json())
                    .then(data => {
                        resolve(data)
                    })
                    .catch(console.error)
            })
        }
    );

    // Return your Object options:
    return {
      dir: {
        input: "views",
        output: "dist"
      }
    }
  };
  