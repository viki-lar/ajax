const getData = () => {
  fetch("db.json", {})
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const user = data;
      sendData(user);
    })
    .catch((error) => {
      console.log("ошибка при получении");
    });
};
getData();

sendData = (user) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("ошибка при отправке");
    });
};
