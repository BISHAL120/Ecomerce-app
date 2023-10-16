import React from "react";
import myContext from "./myContext";

const MyState = (props) => {
  const tShart = [
    {
      "tittle": "Example Tittle 1",
      "price": "10.99",
      "rating": "4.5",
      "img": {
        "img1": "https://i.ibb.co/3YgfY5G/image-removebg-preview-28.png",
        "img2": "https://i.ibb.co/W66SNcF/image-removebg-preview-29.png",
        "img3": "https://i.ibb.co/k0ywLyP/image-removebg-preview-8.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Example Tittle 2",
      "price": "15.99",
      "rating": "4.2",
      "img": {
        "img1": "https://i.ibb.co/W66SNcF/image-removebg-preview-29.png",
        "img2": "https://i.ibb.co/W66SNcF/image-removebg-preview-29.png",
        "img3": "https://i.ibb.co/W66SNcF/image-removebg-preview-29.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Example Tittle 3",
      "price": "12.99",
      "rating": "3.8",
      "img": {
        "img1": "https://i.ibb.co/x7LcM3x/image-removebg-preview-30.png",
        "img2": "https://i.ibb.co/x7LcM3x/image-removebg-preview-30.png",
        "img3": "https://i.ibb.co/x7LcM3x/image-removebg-preview-30.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Gildan Adult Ultra Cotton",
      "price": "9.99",
      "rating": "4.1",
      "img": {
        "img1": "https://i.ibb.co/r47LzkV/image-removebg-preview-32.png",
        "img2": "https://i.ibb.co/r47LzkV/image-removebg-preview-32.png",
        "img3": "https://i.ibb.co/r47LzkV/image-removebg-preview-32.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Men's Slim-Fit Short-Sleeve",
      "price": "14.99",
      "rating": "4.6",
      "img": {
        "img1": "https://i.ibb.co/QJzkRVw/image-removebg-preview-31.png",
        "img2": "https://i.ibb.co/QJzkRVw/image-removebg-preview-31.png",
        "img3": "https://i.ibb.co/QJzkRVw/image-removebg-preview-31.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Gildan Men's Crew T-Shirts",
      "price": "11.99",
      "rating": "3.9",
      "img": {
        "img1": "https://i.ibb.co/Bnb0Qyp/image-removebg-preview-5.png",
        "img2": "https://i.ibb.co/Bnb0Qyp/image-removebg-preview-5.png",
        "img3": "https://i.ibb.co/Bnb0Qyp/image-removebg-preview-5.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Fruit of the Loom Men's Eversoft Cotton",
      "price": "13.99",
      "rating": "4.3",
      "img": {
        "img1": "https://i.ibb.co/0q8SNTJ/image-removebg-preview-6.png",
        "img2": "https://i.ibb.co/0q8SNTJ/image-removebg-preview-6.png",
        "img3": "https://i.ibb.co/0q8SNTJ/image-removebg-preview-6.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Under Armour Men's Tech 2.0 Short",
      "price": "10.99",
      "rating": "4.4",
      "img": {
        "img1": "https://i.ibb.co/k0ywLyP/image-removebg-preview-8.png",
        "img2": "https://i.ibb.co/k0ywLyP/image-removebg-preview-8.png",
        "img3": "https://i.ibb.co/k0ywLyP/image-removebg-preview-8.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Men's 3-Pack Everyday Short Sleeve Tee T-Shirt",
      "price": "12.99",
      "rating": "4.0",
      "img": {
        "img1": "https://i.ibb.co/9Y7qb51/image-removebg-preview-7.png",
        "img2": "https://i.ibb.co/9Y7qb51/image-removebg-preview-7.png",
        "img3": "https://i.ibb.co/9Y7qb51/image-removebg-preview-7.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Men's T-Shirt, Cotton Midweight",
      "price": "9.99",
      "rating": "4.5",
      "img": {
        "img1": "https://i.ibb.co/N9wWgpz/image-removebg-preview-9.png",
        "img2": "https://i.ibb.co/N9wWgpz/image-removebg-preview-9.png",
        "img3": "https://i.ibb.co/N9wWgpz/image-removebg-preview-9.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Russell Athletic Men's Dri-Power Cotton Blend",
      "price": "15.99",
      "rating": "4.2",
      "img": {
        "img1": "https://i.ibb.co/XVtd5gp/image-removebg-preview-10.png",
        "img2": "https://i.ibb.co/XVtd5gp/image-removebg-preview-10.png",
        "img3": "https://i.ibb.co/XVtd5gp/image-removebg-preview-10.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Nautica Men's Short Sleeve Solid Crew Neck T-Shirt",
      "price": "12.99",
      "rating": "3.8",
      "img": {
        "img1": "https://i.ibb.co/v4VfddD/image-removebg-preview-11.png",
        "img2": "https://i.ibb.co/v4VfddD/image-removebg-preview-11.png",
        "img3": "https://i.ibb.co/v4VfddD/image-removebg-preview-11.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Hanes Men's T-Shirt, Moisture",
      "price": "9.99",
      "rating": "4.1",
      "img": {
        "img1": "https://i.ibb.co/yYBZB9k/image-removebg-preview-12.png",
        "img2": "https://i.ibb.co/yYBZB9k/image-removebg-preview-12.png",
        "img3": "https://i.ibb.co/yYBZB9k/image-removebg-preview-12.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Men's Regular-Fit Short-Sleeve Crewneck ",
      "price": "14.99",
      "rating": "4.6",
      "img": {
        "img1": "https://i.ibb.co/kXY1TSV/image-removebg-preview-18.png",
        "img2": "https://i.ibb.co/kXY1TSV/image-removebg-preview-18.png",
        "img3": "https://i.ibb.co/kXY1TSV/image-removebg-preview-18.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Lucky Brand Men's Venice Burnout Notch Neck Tee Shirt",
      "price": "11.99",
      "rating": "3.9",
      "img": {
        "img1": "https://i.ibb.co/xXj5vZW/image-removebg-preview-13.png",
        "img2": "https://i.ibb.co/xXj5vZW/image-removebg-preview-13.png",
        "img3": "https://i.ibb.co/xXj5vZW/image-removebg-preview-13.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Champion Mens T-Shirt, Classic Tee for Men",
      "price": "13.99",
      "rating": "4.3",
      "img": {
        "img1": "https://i.ibb.co/7RpS6ZY/image-removebg-preview-14.png",
        "img2": "https://i.ibb.co/7RpS6ZY/image-removebg-preview-14.png",
        "img3": "https://i.ibb.co/7RpS6ZY/image-removebg-preview-14.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Hanes Essentials Men's T-Shirt Pack, Men's Short",
      "price": "10.99",
      "rating": "4.4",
      "img": {
        "img1": "https://i.ibb.co/7vj8hff/image-removebg-preview-15.png",
        "img2": "https://i.ibb.co/7vj8hff/image-removebg-preview-15.png",
        "img3": "https://i.ibb.co/7vj8hff/image-removebg-preview-15.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Hanes Men's Tagless&Reg",
      "price": "12.99",
      "rating": "4.0",
      "img": {
        "img1": "https://i.ibb.co/f4fdwzY/image-removebg-preview-16.png",
        "img2": "https://i.ibb.co/f4fdwzY/image-removebg-preview-16.png",
        "img3": "https://i.ibb.co/f4fdwzY/image-removebg-preview-16.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Gildan Men's Softstyle Cotton T-Shirt",
      "price": "9.99",
      "rating": "4.5",
      "img": {
        "img1": "https://i.ibb.co/LSVf0MS/image-removebg-preview-17.png",
        "img2": "https://i.ibb.co/LSVf0MS/image-removebg-preview-17.png",
        "img3": "https://i.ibb.co/LSVf0MS/image-removebg-preview-17.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "EMen's Originals Crew Undershirts",
      "price": "15.99",
      "rating": "4.2",
      "img": {
        "img1": "https://i.ibb.co/wRQB5YT/image-removebg-preview-19.png",
        "img2": "https://i.ibb.co/wRQB5YT/image-removebg-preview-19.png",
        "img3": "https://i.ibb.co/wRQB5YT/image-removebg-preview-19.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Gildan Adult Ultra Cotton T-Shirt with Pocket",
      "price": "12.99",
      "rating": "3.8",
      "img": {
        "img1": "https://i.ibb.co/3R4GpY0/image-removebg-preview-20.png",
        "img2": "https://i.ibb.co/3R4GpY0/image-removebg-preview-20.png",
        "img3": "https://i.ibb.co/3R4GpY0/image-removebg-preview-20.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Gildan Women's Heavy Cotton V-Neck",
      "price": "9.99",
      "rating": "4.1",
      "img": {
        "img1": "https://i.ibb.co/31p2RLy/image-removebg-preview-21.png",
        "img2": "https://i.ibb.co/31p2RLy/image-removebg-preview-21.png",
        "img3": "https://i.ibb.co/31p2RLy/image-removebg-preview-21.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Gildan DryBlend T-Shirt, Style G8000, Multipack",
      "price": "14.99",
      "rating": "4.6",
      "img": {
        "img1": "https://i.ibb.co/Vg7DtZc/image-removebg-preview-22.png",
        "img2": "https://i.ibb.co/Vg7DtZc/image-removebg-preview-22.png",
        "img3": "https://i.ibb.co/Vg7DtZc/image-removebg-preview-22.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Fruit of the Loom Men's Eversoft Cotton Long Sleeve",
      "price": "11.99",
      "rating": "3.9",
      "img": {
        "img1": "https://i.ibb.co/NyKbwTk/image-removebg-preview-23.png",
        "img2": "https://i.ibb.co/NyKbwTk/image-removebg-preview-23.png",
        "img3": "https://i.ibb.co/NyKbwTk/image-removebg-preview-23.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Amazon Essentials",
      "price": "13.99",
      "rating": "4.3",
      "img": {
        "img1": "https://i.ibb.co/Cwq3BCd/image-removebg-preview-24.png",
        "img2": "https://i.ibb.co/Cwq3BCd/image-removebg-preview-24.png",
        "img3": "https://i.ibb.co/Cwq3BCd/image-removebg-preview-24.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Gildan Men's Softstyle Cotton T-Shirt,",
      "price": "10.99",
      "rating": "4.4",
      "img": {
        "img1": "https://i.ibb.co/GnSGkVf/image-removebg-preview-25.png",
        "img2": "https://i.ibb.co/GnSGkVf/image-removebg-preview-25.png",
        "img3": "https://i.ibb.co/GnSGkVf/image-removebg-preview-25.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Gildan Hammer Adult T-Shirt, 2-Pack, Style GH000",
      "price": "12.99",
      "rating": "4.0",
      "img": {
        "img1": "https://i.ibb.co/6bDMm0t/image-removebg-preview-26.png",
        "img2": "https://i.ibb.co/6bDMm0t/image-removebg-preview-26.png",
        "img3": "https://i.ibb.co/6bDMm0t/image-removebg-preview-26.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Gildan Men's V-Neck T-Shirts, Multipack, Style G1103",
      "price": "9.99",
      "rating": "4.5",
      "img": {
        "img1": "https://i.ibb.co/JpSpsk6/image-removebg-preview-27.png",
        "img2": "https://i.ibb.co/JpSpsk6/image-removebg-preview-27.png",
        "img3": "https://i.ibb.co/JpSpsk6/image-removebg-preview-27.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Men's Slim-Fit Short-Sleeve V-Neck T-Shirt, Pack of 2",
      "price": "15.99",
      "rating": "4.2",
      "img": {
        "img1": "https://i.ibb.co/3YgfY5G/image-removebg-preview-28.png",
        "img2": "https://i.ibb.co/3YgfY5G/image-removebg-preview-28.png",
        "img3": "https://i.ibb.co/3YgfY5G/image-removebg-preview-28.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Gildan Men's Softstyle Cotton T-Shirt, Style G64000, Multipack",
      "price": "12.99",
      "rating": "3.8",
      "img": {
        "img1": "https://i.ibb.co/W66SNcF/image-removebg-preview-29.png",
        "img2": "https://i.ibb.co/W66SNcF/image-removebg-preview-29.png",
        "img3": "https://i.ibb.co/W66SNcF/image-removebg-preview-29.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "American Apparel Unisex Heavyweight Cotton T-Shirt",
      "price": "9.99",
      "rating": "4.1",
      "img": {
        "img1": "https://i.ibb.co/x7LcM3x/image-removebg-preview-30.png",
        "img2": "https://i.ibb.co/x7LcM3x/image-removebg-preview-30.png",
        "img3": "https://i.ibb.co/x7LcM3x/image-removebg-preview-30.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "American Apparel Fine Jersey T-Shirt, Style G2001",
      "price": "14.99",
      "rating": "4.6",
      "img": {
        "img1": "https://i.ibb.co/QJzkRVw/image-removebg-preview-31.png",
        "img2": "https://i.ibb.co/QJzkRVw/image-removebg-preview-31.png",
        "img3": "https://i.ibb.co/QJzkRVw/image-removebg-preview-31.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "American Apparel Unisex CVC T-Shirt, Style",
      "price": "11.99",
      "rating": "3.9",
      "img": {
        "img1": "https://i.ibb.co/r47LzkV/image-removebg-preview-32.png",
        "img2": "https://i.ibb.co/r47LzkV/image-removebg-preview-32.png",
        "img3": "https://i.ibb.co/r47LzkV/image-removebg-preview-32.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Liquid Blue Men's Road Trippin' Short Sleeve T-Shirt",
      "price": "13.99",
      "rating": "4.3",
      "img": {
        "img1": "https://i.ibb.co/SrYzmPN/image-removebg-preview-34.png",
        "img2": "https://i.ibb.co/SrYzmPN/image-removebg-preview-34.png",
        "img3": "https://i.ibb.co/SrYzmPN/image-removebg-preview-34.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Nautica Men's Navtech Colorblock Tee",
      "price": "10.99",
      "rating": "4.4",
      "img": {
        "img1": "https://i.ibb.co/Bnb0Qyp/image-removebg-preview-5.png",
        "img2": "https://i.ibb.co/Bnb0Qyp/image-removebg-preview-5.png",
        "img3": "https://i.ibb.co/Bnb0Qyp/image-removebg-preview-5.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Costa Hooked Short Sleeve Blend",
      "price": "12.99",
      "rating": "4.0",
      "img": {
        "img1": "https://i.ibb.co/SfsQVQZ/image-removebg-preview-35.png",
        "img2": "https://i.ibb.co/SfsQVQZ/image-removebg-preview-35.png",
        "img3": "https://i.ibb.co/SfsQVQZ/image-removebg-preview-35.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Graphic Tees Balloon Design Printed",
      "price": "9.99",
      "rating": "4.5",
      "img": {
        "img1": "https://i.ibb.co/RbCXbNj/image-removebg-preview-36.png",
        "img2": "https://i.ibb.co/RbCXbNj/image-removebg-preview-36.png",
        "img3": "https://i.ibb.co/RbCXbNj/image-removebg-preview-36.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Mens Hide and Seek Champion T Shirt",
      "price": "15.99",
      "rating": "4.2",
      "img": {
        "img1": "https://i.ibb.co/TBdWVGb/image-removebg-preview-37.png",
        "img2": "https://i.ibb.co/TBdWVGb/image-removebg-preview-37.png",
        "img3": "https://i.ibb.co/TBdWVGb/image-removebg-preview-37.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Aelfric Eden Mens 90s Vintage Oversize",
      "price": "12.99",
      "rating": "3.8",
      "img": {
        "img1": "https://i.ibb.co/L9jMwz7/image-removebg-preview-38.png",
        "img2": "https://i.ibb.co/L9jMwz7/image-removebg-preview-38.png",
        "img3": "https://i.ibb.co/L9jMwz7/image-removebg-preview-38.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle":
        "5 Burgundy Design Printed Stitched Hustle Bear Sneaker Matching T-Shirt",
      "price": "9.99",
      "rating": "4.1",
      "img": {
        "img1": "https://i.ibb.co/ZmJTd6J/image-removebg-preview-39.png",
        "img2": "https://i.ibb.co/ZmJTd6J/image-removebg-preview-39.png",
        "img3": "https://i.ibb.co/ZmJTd6J/image-removebg-preview-39.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "MTV Men's Springbreak 94 Logo T-Shirt",
      "price": "14.99",
      "rating": "4.6",
      "img": {
        "img1": "https://i.ibb.co/89VL5nx/image-removebg-preview-40.png",
        "img2": "https://i.ibb.co/89VL5nx/image-removebg-preview-40.png",
        "img3": "https://i.ibb.co/89VL5nx/image-removebg-preview-40.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Nintendo Men's Keep It Classic T-Shirt",
      "price": "11.99",
      "rating": "3.9",
      "img": {
        "img1": "https://i.ibb.co/XjQGHpL/image-removebg-preview-41.png",
        "img2": "https://i.ibb.co/XjQGHpL/image-removebg-preview-41.png",
        "img3": "https://i.ibb.co/XjQGHpL/image-removebg-preview-41.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Mens Short-Sleeve Vintage Whale Pocket Tee",
      "price": "13.99",
      "rating": "4.3",
      "img": {
        "img1": "https://i.ibb.co/hcvxDj3/image-removebg-preview-42.png",
        "img2": "https://i.ibb.co/hcvxDj3/image-removebg-preview-42.png",
        "img3": "https://i.ibb.co/hcvxDj3/image-removebg-preview-42.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Lacoste Adult Short Sleeve Bold Print Crewneck T-Shirt",
      "price": "10.99",
      "rating": "4.4",
      "img": {
        "img1": "https://i.ibb.co/PDM3BnZ/image-removebg-preview-43.png",
        "img2": "https://i.ibb.co/PDM3BnZ/image-removebg-preview-43.png",
        "img3": "https://i.ibb.co/PDM3BnZ/image-removebg-preview-43.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Men's Regular-Fit Short-Sleeve Crewneck Pocket T-Shirt",
      "price": "12.99",
      "rating": "4.0",
      "img": {
        "img1": "https://i.ibb.co/PhNRVPf/image-removebg-preview-44.png",
        "img2": "https://i.ibb.co/PhNRVPf/image-removebg-preview-44.png",
        "img3": "https://i.ibb.co/PhNRVPf/image-removebg-preview-44.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Liquid Blue Dragon Vintage All Over Print Short Sleeve T-Shirt",
      "price": "9.99",
      "rating": "4.5",
      "img": {
        "img1": "https://i.ibb.co/z2Jqnhd/image-removebg-preview-47.png",
        "img2": "https://i.ibb.co/z2Jqnhd/image-removebg-preview-47.png",
        "img3": "https://i.ibb.co/z2Jqnhd/image-removebg-preview-47.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle":
        "12 Field Purple Design Printed Caution Tape Sneaker Matching T-Shirt",
      "price": "15.99",
      "rating": "4.2",
      "img": {
        "img1": "https://i.ibb.co/cYnSTHv/image-removebg-preview-48.png",
        "img2": "https://i.ibb.co/cYnSTHv/image-removebg-preview-48.png",
        "img3": "https://i.ibb.co/cYnSTHv/image-removebg-preview-48.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "The Mountain Men's Fairy Queen T-Shirt",
      "price": "12.99",
      "rating": "3.8",
      "img": {
        "img1": "https://i.ibb.co/Xxbc6tF/image-removebg-preview-49.png",
        "img2": "https://i.ibb.co/Xxbc6tF/image-removebg-preview-49.png",
        "img3": "https://i.ibb.co/Xxbc6tF/image-removebg-preview-49.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle":
        "5 Burgundy Design Printed Stitched Hustle Bear Sneaker Matching T-Shirt",
      "price": "9.99",
      "rating": "4.1",
      "img": {
        "img1": "https://i.ibb.co/ccQ0gQ6/image-removebg-preview-50.png",
        "img2": "https://i.ibb.co/ccQ0gQ6/image-removebg-preview-50.png",
        "img3": "https://i.ibb.co/ccQ0gQ6/image-removebg-preview-50.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
    {
      "tittle": "Liquid Blue Men's Plus-Size Dragon Catcher T-Shirt",
      "price": "14.99",
      "rating": "4.6",
      "img": {
        "img1": "https://i.ibb.co/GFPddsT/image-removebg-preview-52.png",
        "img2": "https://i.ibb.co/GFPddsT/image-removebg-preview-52.png",
        "img3": "https://i.ibb.co/GFPddsT/image-removebg-preview-52.png",
      },
      "color": {
        "color1": "red",
        "color2": "green",
        "color3": "blue",
      },
      "discription":
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, tempora magnam illum neque molestiae molestias officia qui voluptas iure natus, consectetur repudiandae nisi? Officia, est!",
      "category": "tshart",
    },
  ];

  return (
    <myContext.Provider value={tShart}>{props.children}</myContext.Provider>
  );
};

export default MyState;
