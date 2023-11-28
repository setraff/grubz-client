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