import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/App.css";

const cardItemsInfo = [
    {
        id: 1,
        imgSrc: "https://cdn.sptmr.ru/upload/resize_cache/iblock/3f9/331_394_1/13952200299.jpg",
        price: "3420Р",
        name: "Рюкзак спортивный Demix",
        score: "4 балла // 6 отзывов",
    },
    {
        id: 2,
        imgSrc: "https://cdn1.ozone.ru/s3/multimedia-6/c1200/6002689494.jpg",
        price: "2 990Р",
        name: "Жилет для рыбалки и охоты",
        score: "4 балла // 6 отзывов",
    },
    {
        id: 3,
        imgSrc: "https://cdn1.ozone.ru/s3/multimedia-p/c1200/6004942537.jpg",
        price: "560Р",
        name: "Сапоги рыболовные",
        score: "4 балла // 6 отзывов",
    },
    {
        id: 4,
        imgSrc: "https://cdn1.ozone.ru/s3/multimedia-3/c1200/6006340251.jpg",
        price: "73 261Р",
        name: "Игровой ноутбук ASUS ROG Strix G GL531GT-AL234T",
        score: "4 балла // 6 отзывов",
    },
    {
        id: 5,
        imgSrc: "https://cdn1.ozone.ru/multimedia/c1200/1025050630.jpg",
        price: "8 490Р",
        name: "Телевизор BBK 28LEM-1050/T2C 28",
        score: "4 балла // 6 отзывов",
    }
]

ReactDOM.render(<App items={cardItemsInfo}/>, document.getElementById('cards-block'));