import React from 'react';
import ReactDOM from 'react-dom';
import MainWrapper from './components/main-wrapper';
import MobileMenu from './native-js/mobile-menu';
import BuyBtn from './components/buy-btn';
console.log("Hello landing!2");

// const container = undefined /*document.getElementById('main')*/;
//
// if (container) {
//   ReactDOM.render(<MainWrapper/>, container);
// }


const containerBuyBtn1 = document.getElementById('buyNow1');
const containerBuyBtn2 = document.getElementById('buyNow2');
const containerBuyBtn3 = document.getElementById('buyNow3');
const containerBuyBtn4 = document.getElementById('buyNow4');
const containerBuyBtn5 = document.getElementById('buyNow5');
const containerBuyBtn6 = document.getElementById('buyNow6');

if (containerBuyBtn1) {
  ReactDOM.render(<BuyBtn/>, containerBuyBtn1);
}

if (containerBuyBtn2) {
  ReactDOM.render(<BuyBtn/>, containerBuyBtn2);
}

if (containerBuyBtn3) {
  ReactDOM.render(<BuyBtn/>, containerBuyBtn3);
}

if (containerBuyBtn4) {
  ReactDOM.render(<BuyBtn text={'Заказать'}/>, containerBuyBtn4);
}

if (containerBuyBtn5) {
  ReactDOM.render(<BuyBtn text={'Бесплатная консультанция'}/>, containerBuyBtn5);
}

if (containerBuyBtn6) {
  ReactDOM.render(<BuyBtn /*showFileUpload={true}*/ text={'Бесплатная визуализация'}/>, containerBuyBtn6);
}


