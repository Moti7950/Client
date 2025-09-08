type TemplitPost = {
  "id": number,
  "img" : string,
  "explen": string;
  "likes": string;
  "ownerName": string;
  "dataAndTime": string;
}

export const ExamplPost:TemplitPost[] = [
  {
    "id": 1,
    "img": "../../public/img/1.jpg",
    "explen": "11",
    "likes": "D",
    "ownerName": "1",
    "dataAndTime": "12:51"
  },

  {
    "id": 2,
    "img": "../../public/img/2.jpg",
    "explen": "22",
    "likes": "L",
    "ownerName": "2",
    "dataAndTime": "12:52"
  },

  {
    "id": 3,
    "img": "../../public/img/3.jpg",
    "explen": "33",
    "likes": "L",
    "ownerName": "3",
    "dataAndTime": "12:53"
  }

]
