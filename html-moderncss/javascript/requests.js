import {
  addAccountData,
  deleteAccountData,
  userAccountInfoLenght,
  displayUserAccount,
} from "./storeData.js";

const MAIN_URL = "https://jsonplaceholder.typicode.com";
let   storeId = 0;
export const getFormInfo = () => {
  let getBtnId = document.querySelector("#formBtn");

  getBtnId.addEventListener("submit", async(event) => {
    event.preventDefault();
    let getInputValue = document.querySelector("#inputText").value;

    let newItem = {
      userId: 200,
      accountName: getInputValue,
      hasValue: true,
    };
 
    if ((userAccountInfoLenght() !== 2 || !userAccountInfoLenght() > 2)
    ) {
      let showData = await postItems(newItem);
      addAccountData(showData)
      storeId = showData.id
      //let showGet = await getItems()
      //localStorage.setItem("allUsers",JSON.stringify(showReceived))
    }
    if (userAccountInfoLenght() == 2 || userAccountInfoLenght() > 2) {
      let dlData = deleteAccountData(storeId);
      userAccountInfoLenght();
    } 
  });
};

const postItems = async(thisItem) => { 
   let postData = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          thisItem
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
   let jsonData = await postData.json()
   return jsonData   
  }

const getItems = async () => {
  //example
  try {
    let thisResponse = await fetch(`${MAIN_URL}/todos?id=20`);
    let receivedRes = await thisResponse.json();
    return receivedRes;
  } catch (error) {
    console.log(error);
  }
};
export const addData = () => {};
export const removeData = () => {};
getFormInfo();
