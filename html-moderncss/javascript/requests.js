import axios from "axios";
import 'regenerator-runtime/runtime'
import { addAccountData, deleteAccountData, userAccountInfoLenght, displayUserAccount } from "./storeData.js";

const MAIN_URL = 'https://jsonplaceholder.typicode.com'

export const getFormInfo = () => {
  let getBtnId = document.querySelector('#formBtn')
  
  getBtnId.addEventListener('submit', async(event) => {
    event.preventDefault()
    let getInputValue = document.querySelector('#inputText').value
   
    let newItem = {
        userId:200,
        accountName: getInputValue,
        hasValue: true
    }
   let showReceived = await postItems(newItem)
  
   if(showReceived !== undefined && (userAccountInfoLenght() !== 2 || ! userAccountInfoLenght() > 2)){
       addAccountData(showReceived)
       //let showGet = await getItems()
       //localStorage.setItem("allUsers",JSON.stringify(showReceived))
   }
   if(userAccountInfoLenght() == 2 || userAccountInfoLenght() > 2){
       let dlData = deleteAccountData(showReceived.id)
       console.log("deletedData " + JSON.stringify(dlData))
       userAccountInfoLenght()
   }
  })
}

const postItems = async(thisItem) => {
    try {
        let thisResponse = await axios.post(`${MAIN_URL}/todos`, thisItem)
        let receivedRes = thisResponse.data
        return receivedRes
    } catch (error) {
        console.log(error)
    }

}
const getItems = async() => {
    //example
    try {
        let thisResponse = await axios.get(`${MAIN_URL}/todos?id=201`)
        let receivedRes = thisResponse.data
        return receivedRes
    } catch (error) {
        console.log(error)
    }
}
export const addData = () => {
   
}
export const removeData = () => {
   
}
getFormInfo()