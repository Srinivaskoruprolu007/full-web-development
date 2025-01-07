function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        userName: "Srinivas",
        url: "https://srinivasportofolioweb.net",
      });
    }, 3000);
  });
}

// fetchUserData(); common way to do this

async function getUserData() {
  try {
    console.log("Fetching user Data");
    const userData = await fetchUserData();
    console.log("user data :", userData);
  } catch (error) {
    console.error("Unable to fetch the data", error);
  }
}
getUserData();