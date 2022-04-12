const userData = [
  {
    userAccountInfo: [
      {
        id: 0,
        userId: 200,
        accountName: "accountName",
        hasValue: true,
      },
    ],
    usersInfo: [
      {
        id: 0,
        name: "Angelica",
        topic: "firstTopic",
        feedback: "textOneFeedback",
      },
      {
        id: 1,
        name: "Stephanie",
        topic: "SecondTopic",
        feedback: "textTwoFeedback",
      },
      {
        id: 2,
        name: "Robert",
        topic: "thirdTopic",
        feedback: "textthirdFeedback",
      },
    ],
  },
];
const userComments = [
  {
    usersCommentsInfo: [
      {
        id: 0,
        name: "Anisha",
        comments: "textOneComment",
        srcImg: "./images/avatar-anisha.png",
      },
      {
        id: 1,
        name: "Sophie",
        comments: "textTwoComment",
        srcImg: "./images/avatar-anisha.png",
      },
      {
        id: 2,
        name: "Tayla",
        comments: "textthirdComment",
        srcImg: "./images/avatar-anisha.png",
      },
    ],
  },
];
export const userAccountInfoLenght = () => {
  console.log(userData[0].userAccountInfo.length);
  return userData[0].userAccountInfo.length;
};
export const displayUserAccount = () => {
  return userData.map((acData) => {
    console.log("displayUserAccount" + JSON.stringify(acData.userAccountInfo));
    return acData.userAccountInfo;
  });
};
export const runComments = () => {
  return userComments.map((dataCm) => {
    return dataCm.usersCommentsInfo;
  });
};
export const runData = () => {
  return userData.map((data) => {
    return data.usersInfo;
  });
};
export const addAccountData = (newAccount) => {
  return userData.map((data) => {
    data.userAccountInfo.push(newAccount);
    console.log("userAccountData " + JSON.stringify(data.userAccountInfo));
    return data.userAccountInfo;
  });
};
export const deleteAccountData = (accountId) => {
  let stData = "";
  userData.map((data) => {
    stData = data.userAccountInfo.filter((dt) => {
      return dt.id != accountId;
    });
    data.userAccountInfo = stData;
  });
  return stData;
};
