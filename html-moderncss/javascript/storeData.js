const userData = [
  {
    usersInfo: [
        {
            id: 0,
            name: "Angelica",
            topic: "firstTopic",
            feedback: 'textOneFeedback',
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
    ]
  },
];
const userComments = [
  {
    usersCommentsInfo: [
        {
            id: 0,
            name: "Anisha",
            comments: 'textOneComment',
            srcImg: './images/avatar-anisha.png'
          },
          {
            id: 1,
            name: "Sophie",
            comments: "textTwoComment",
            srcImg: './images/avatar-anisha.png'
          },
          {
            id: 2,
            name: "Tayla",
            comments: "textthirdComment",
            srcImg: './images/avatar-anisha.png'
          },
    ]
  },
];
export const runComments = () => {
  return userComments.map(dataCm => {
    return dataCm.usersCommentsInfo
})
}
export const runData = () => {
   return userData.map(data => {
        return data.usersInfo
    }) 
}
