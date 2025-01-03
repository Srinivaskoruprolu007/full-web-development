function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data fetched");
    }, 2000);
  });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("comment Data fetched");
    }, 2000);
  });
}

async function getBlogData() {
  try {
    console.log("fetching blog data.");
    // const blogData = await fetchPostData();
    // const commentData = await fetchCommentData();
    // console.log(blogData);
    // console.log(commentData);
    const [blogData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);
    console.log(blogData);
    console.log(commentData);
    console.log("fetch complete");
  } catch (error) {
    console.error("Error fetching Blog Data", error);
  }
}

getBlogData();
