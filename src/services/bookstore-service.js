
export default class BookstoreService {
    data = [{
        id: 1,
        title: "White fang",
        author: "Jack London",
        price: 30,
        imgSrc: "https://cv4.litres.ru/pub/c/cover/50911247.jpg"
    },
    {
        id: 2,
        title: "Martin Eden",
        author: "Jack London",
        price: 40,
        imgSrc: "https://cs8.pikabu.ru/post_img/2017/12/07/4/1512622148258553721.jpg"
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: 27,
        imgSrc: "https://i.pinimg.com/originals/54/1e/9a/541e9adfadd2491f01c46d3d383f916d.jpg"
    }];

    getBooks(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data);
            }, 700)
        })
    }
}