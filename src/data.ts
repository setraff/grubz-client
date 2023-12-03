type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: {title: string; additionalPrice:number}[];
};

type Products = Product[];

export const featuredProducts: Products = [
    {
        id: 1,
        title: "Garudhiya",
        desc: "very nice garudhiya",
        img: "/slidePic1.jpg",
        price: 15,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 0,
          },
          {
            title: "Large",
            additionalPrice: 2,
          },
        ],
      },
      {
        id: 2,
        title: "Submarine",
        desc: "Subs for all ocassions",
        img: "/slidePic2.jpg",
        price: 90,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 20,
          },
          {
            title: "Large",
            additionalPrice: 40,
          },
        ],
      },
      {
        id: 3,
        title: "Mojito",
        desc: "Mojitos for a cool day",
        img: "/slidePic3.jpg",
        price: 90,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 20,
          },
          {
            title: "Large",
            additionalPrice: 40,
          },
        ],
      },
      {
        id: 4,
        title: "Burgers",
        desc: "gotta get them burgers",
        img: "/slidePic4.jpg",
        price: 90,
        options: [
          {
            title: "Small",
            additionalPrice: 0,
          },
          {
            title: "Medium",
            additionalPrice: 20,
          },
          {
            title: "Large",
            additionalPrice: 40,
          },
        ],
      },
      
]


type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];

export const menu: Menu = [
  {
    id: 1,
    slug: "maldivianFood",
    title: "Maldivian Food",
    desc: "Maldivian food, cuz we all love home",
    img: "/slidePic1.jpg",
    color: "black",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Burgers",
    desc: "Fun fact: Burgers are German apparently",
    img: "/slidePic4.jpg",
    color: "white",
  },
  {
    id: 3,
    slug: "mojito",
    title: "Mojito",
    desc: "kinda funny how we made a alcoholic drink non alcoholic...still better than Jugo",
    img: "/slidepic3.jpg",
    color: "white",
  },
];