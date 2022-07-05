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
  let xhr = new XMLHttpRequest();

  // отслеживаем процесс отправки
  xhr.upload.onprogress = function (event) {
    console.log(`Отправлено ${event.loaded} из ${event.total}`);
  };

  // Ждём завершения: неважно, успешного или нет
  xhr.onloadend = function () {
    if (xhr.status == 200 || xhr.status == 201) {
      console.log("Успех");
      console.log(user);
    } else {
      console.log("Ошибка " + this.status);
    }
  };

  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
  xhr.send(JSON.stringify(user));

  // fetch("https://jsonplaceholder.typicode.com/posts", {
  //   method: "POST",
  //   body: JSON.stringify(user),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //   })
  //   .catch((error) => {
  //     console.log("ошибка при отправке");
  //   });
};
