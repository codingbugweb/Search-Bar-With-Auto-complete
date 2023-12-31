let SocialLists = [
    { name: "Twitter", value: "@codingbug" },
    { name: "Whatsapp", value: "@codingbug" },
    { name: "Telegram", value: "@codingbug" },
    { name: "Skype", value: "@codingbug" },
    { name: "Discord", value: "@codingbug" }
  ];
  
  const searchWrapper = document.querySelector(".search");
  const inputBox = searchWrapper.querySelector("input");
  const suggBox = searchWrapper.querySelector(".autocomp-box");
  
  inputBox.onkeyup = (event) => {
    let userData = event.target.value;
    let emptyArray = [];
    if (userData) {
      emptyArray = SocialLists.filter((data, { name, value }) => {
        return data.name
          .toLocaleLowerCase()
          .startsWith(userData.toLocaleLowerCase());
      });
      emptyArray = emptyArray.map((data, { name, value }) => {
        return (data = `<li>${data.name}: ${data.value}</li>`);
      });
      searchWrapper.classList.add("active");
      showSuggestions(emptyArray);
    } else {
      searchWrapper.classList.remove("active");
    }
  };
  
  function showSuggestions(list) {
    let listData;
    if (list.length) {
      listData = list.join("");
    } else {
      listData = `<li>Not Found</li>`;
    }
    suggBox.innerHTML = listData;
  }
  