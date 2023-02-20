import F1 from '../assets/img/f1.png'
import F2 from '../assets/img/f2.png';
import F3 from '../assets/img/f3.png';
import F4 from '../assets/img/f4.png';
import F5 from '../assets/img/f5.png';
import F6 from '../assets/img/f6.png';
import F7 from '../assets/img/f7.png';
import F8 from '../assets/img/f8.png';
import F9 from '../assets/img/f9.png';
import F10 from '../assets/img/f10.png'
import F11 from '../assets/img/fi1.png';
import F12 from '../assets/img/fi2.png';





export const CropData = [
    {
        id : 1,
        name : 'Fresh Strawberries',
        desc : 'All sweet berries',
        price : '1,500',
        imageSrc : F1,
        Due : '27.01.23',
        inprice : '1,000',
        havDate: '27.01.23',
    },    
    {
        id : 2,
        name : 'Fresh Banana',
        desc : 'Banana & Plantain',
        Due : '1,000',
        inprice : '1,000',
        havDate: '27.01.23',
        imageSrc :  F8,
    },
    {
        id : 3, 
        name : 'Watermelon', 
        desc : 'Sweet watermelon', 
        Due : '27.01.23',
        inprice : '1,000',
        havDate: '27.01.23',
        imageSrc : F10
    },
    {
        id : 4, 
        name : 'Pineapple', 
        desc : 'Delicious Pineapple', 
        Due : '27.01.23',
        inprice : '1,000',
        havDate: '27.01.23', 
        imageSrc : F2
    },
    {
        id : 5,
        name : 'Fresh Strawberries',
        desc : 'All sweet berries',
        imageSrc :  F5,
        Due : '27.01.23',
        inprice : '1,000',
        havDate: '27.01.23',
    },    
    {
        id : 6,
        name : 'Fresh Banana',
        desc : 'Banana & Plantain',
        imageSrc :  F5,
        Due : '27.01.23',
        inprice : '1,000',
        havDate: '27.01.23',
    },
    {
        id : 7, 
        name : 'Watermelon', 
        desc : 'Sweet watermelon', 
         imageSrc : F5,
         Due : '27.01.23',
         inprice : '1,000',
         havDate: '27.01.23',
    },
    {
        id : 8, 
        name : 'Pineapple', 
        desc : 'Delicious Pineapple', 
        price : '500', 
        imageSrc : F6,
        Due : '27.01.23',
        inprice : '1,000',
        havDate: '27.01.23',
    },
    {
        id : 9,
        name : 'Fresh Strawberries',
        desc : 'All sweet berries',
        price : '1,500',
        imageSrc : F11,
        Due : '27.01.23',
        inprice : '1,000',
        havDate: '27.01.23',
    },    
    {
        id : 10,
        name : 'Fresh Banana',
        desc : 'Banana & Plantain',
        price : '1,000',
        imageSrc : F1,
        Due : '27.01.23',
        inprice : '1,000',
        havDate: '27.01.23',
    },
    {
        id : 11, 
        name : 'Watermelon', 
        desc : 'Sweet watermelon', 
        price : '800',
         imageSrc : F8,
         Due : '27.01.23',
         inprice : '1,000',
         havDate: '27.01.23',
    },
    {
        id : 12, 
        name : 'Pineapple', 
        desc : 'Delicious Pineapple', 
        price : '500', 
        imageSrc : F2,
        Due : '27.01.23',
        inprice : '1,000',
        havDate: '27.01.23',
    },
];


export const cropsList = [
    {
      amountPlanted: 10,
      cropActualDuration: 14,
      cropCategory: "Vegetables",
      cropEstimatedDuration: 14,
      cropId: 1,
      cropName: "Tomatoes",
      dailyInterestRate: 0.1,
      estimatedYeildRate: 0.8,
      farms: ["Farm A"],
      harvestDate: "2023-02-",
      harvested: false,
      monthlyInterestRate: 0.05,
      plantDate: "2023-02-1",
      planted: true,
      price: 5.0
    },
    // {
    //   amountPlanted: 20,
    //   cropActualDuration: 28,
    //   cropCategory: "Fruits",
    //   cropEstimatedDuration: 28,
    //   cropId: 2,
    //   cropName: "Apples",
    //   dailyInterestRate: 0.2,
    //   estimatedYeildRate: 0.6,
    //   farms: ["Farm A", "Farm B"],
    //   harvestDate: "2023-03",
    //   harvested: false,
    //   monthlyInterestRate: 0.1,
    //   plantDate: "2023-02-14T23:59:59.999Z",
    //   planted: true,
    //   price: 7.5
    // },
    // // Add more crops here
  ];
  
 
export   const farm = [
    {
    id : 1,
    name: "Farm A",
    location: "123 Main St.",
    imageSrc : F1,
    crops: cropsList
  },
  {
    id : 2,
    name: "Farm c",
    location: "123 Main St.",
    imageSrc : F1,
    crops: cropsList
  },
  {
    id : 3,
    name: "Farm b",
    location: "123 Main St.",
    imageSrc : F1,
    crops: cropsList
  },
  {
    id : 4,
    name: "Farm b",
    location: "123 Main St.",
    imageSrc : F1,
    crops: cropsList
  }

];
  