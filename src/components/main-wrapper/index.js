import React, {Fragment} from 'react';
import './index.less';

class MainWrapper extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="header fullWidth">
          <img src="/static-img/logo.png" alt="" className="header_logo"/>
          <div className="header_items">
            <a href="/#howWeMake" className="header_item">
              <span>Примеры</span>
            </a>
            <a href="/#prep" className="header_item">
              <span>Изготовление</span>
            </a>
            <a href="/#quest" className="header_item">
              <span>Вопросы</span>
            </a>
            <a href="/#price" className="header_item">
              <span>Цены</span>
            </a>
            <a href="/#yorPhoto" className="header_item">
              <span>Ваше фото</span>
            </a>
          </div>
          <div className="header_number">+380989605008</div>
        </div>

        <div className="hiBlock fullWidth backgroundImage"
             style={{backgroundImage: "url('/static-img/mainPage.jpg')"}}
        >
          <div className="hiBlock_content container">
            <h1 className="hiBlock_content_h1">Loft картины на досках</h1>
            <div className="hiBlock_content_advantages">
              <div className="hiBlock_content_advantages_item rightShow1">
                Уникальный подарок
              </div>
              <div className="hiBlock_content_advantages_item rightShow2">
                Дизайнерское решение
              </div>
              <div className="hiBlock_content_advantages_item rightShow3">
                Натуральные материалы
              </div>
            </div>
            <div className="callUsWrapper">
              <div className="callUs">
                <input className="callUs_input"/>
                <div className="callUs_btn" id="callUs_btn">
                  <span>Заказать</span>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="whoWeAre">
          <div className="container">
            <p className="whoWeAre_title">Ищешь оригинальный подарок и не хочешь быть похожим на
              остальных?
              Желаешь украсить интерьер и подчеркнуть стиль помещения, тогда ты попал по адресу.
              Выбери любую фотографию со своего смарфона или интернета и отправь ее нам - увидешь
              будующий результат, остальное мы сделаем сами!</p>
          </div>
        </div>

        <a name="howWeMake"></a>

        <div className="howWeMake fullWidth whoBuy">
          <div className="container">
            <div className="howWeMake_title">
              Причины купить картины на дереве в Украине
            </div>
            <div className="howWeMake_description">
              Наши картины будут смотреться хорошо в любом интреьере или подарят эмоции в качестве
              подарка
            </div>
            <div className="howWeMake_blocks">
              <div className="howWeMake_blocks_item">
                <div className="howWeMake_blocks_item_title">Подарок для близких</div>
                <img className="howWeMake_blocks_item_img"
                     src="static-img/2.jpg"/>
                <div className="howWeMake_blocks_item_desc">Не знаете что подарить? Хотите выделится
                  и
                  не покупать один из сотни заезженных подарков, пылящихся на полках магазинов?
                  Глядя на картины из дерева, близкие будут вспоминтаь вас и радоваться.
                </div>
              </div>
              <div className="howWeMake_blocks_item">
                <div className="howWeMake_blocks_item_title">Картины для интерьера</div>
                <img className="howWeMake_blocks_item_img"
                     src="static-img/1_1.jpg"/>
                <div className="howWeMake_blocks_item_desc">Деревянные картины из натурального
                  материала
                  всегда будут гармонично и стильно вписываться в любом помещении. Подчеркнут ваш
                  вкус и любовь к природе.

                </div>
              </div>
              <div className="howWeMake_blocks_item">
                <div className="howWeMake_blocks_item_title">Для заведений и офисов</div>
                <img className="howWeMake_blocks_item_img"
                     src="static-img/3.jpg"/>
                <div className="howWeMake_blocks_item_desc">Хотите удивить своих клиентов и
                  сотрудников
                  яркими и со вкусом подобрынные изображениями, тогда мы вам поможем.
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="examplesImages fullWidth">
          <div className="examplesImages_item">
            <img src="/static-img/pre1.jpg"/>
          </div>
          <div className="examplesImages_item">
            <img src="/static-img/pre2.JPG"/>
          </div>
          <div className="examplesImages_item">
            <img src="/static-img/pre3.JPG"/>
          </div>
          <div className="examplesImages_item">
            <img src="/static-img/pre4.JPG"/>
          </div>
          <div className="examplesImages_item">
            <img src="/static-img/pre5.JPG"/>
          </div>
          <div className="examplesImages_item">
            <img src="/static-img/pre6.JPG"/>
          </div>
          <div className="examplesImages_item">
            <img src="/static-img/pre7.JPG"/>
          </div>
          <div className="examplesImages_item">
            <img src="/static-img/pre8.JPG"/>
          </div>
        </div>
        <a name="prep"></a>
        <div className="buyNow2 fullWidth backgroundImage"
             style={{backgroundImage: "url('/static-img/buy3.jpg')"}}
        >

          <div className="buyNowContBodyText2">
            <div className="buyNowContBodyTextTitle2">ПОДАРОК К ПРАЗДНИКУ</div>

            <div className="buyNowContBodyTextContent2">
              <div className="buyNow2_arrow">
                <img src="/static-img/red-arrow.png" alt=""/>
              </div>
              <span>КУПИТЬ</span>
            </div>

          </div>
        </div>
        <div className="howWeMake fullWidth">
          <div className="container">
            <div className="howWeMake_title">
              Как мы делаем картины на досках в Украине
            </div>
            <div className="howWeMake_description">
              Каждую картину на досках мы делаем в ручную, придавая ей уникальность.
            </div>
            <div className="howWeMake_blocks">
              <div className="howWeMake_blocks_item">
                <div className="howWeMake_blocks_item_title">Ручная обработка</div>
                <img className="howWeMake_blocks_item_img"
                     src="static-img/DR1.jpg"/>
                <div className="howWeMake_blocks_item_desc">Отобранная сосна проходит ручной процесс
                  распила и брошировки, что придает ей натуральность, уникальность и
                  долговечность. Изделия обрабатываются лаком и маслами для защиты.
                </div>
              </div>
              <div className="howWeMake_blocks_item">
                <div className="howWeMake_blocks_item_title">Нанесение картинки</div>
                <img className="howWeMake_blocks_item_img"
                     src="static-img/DR22.jpg"/>
                <div className="howWeMake_blocks_item_desc">

                  Оточенным многолетним опытом броб и ошибок способом мы наносим изображение на
                  дерево, закрепляем его и подготавливаем к следующему этапу.
                </div>
              </div>
              <div className="howWeMake_blocks_item">
                <div className="howWeMake_blocks_item_title">Лак, крепления, упаковка</div>
                <img className="howWeMake_blocks_item_img"
                     src="static-img/DR3.jpg"/>
                <div className="howWeMake_blocks_item_desc">
                  После всех работ, мы покрываем картину лаком, прокрашиваем и защищаем обратную
                  сторону, делаем изображение состаренным и реалистичным. Затем упаковываем и
                  отправляем вам.
                </div>
              </div>
            </div>
          </div>

        </div>


        <div className="examplesContBody">
          <img src="/static-img/111.jpg"/>
          <div className="examplesContBodyText">
            <div className="examplesContBodyTextTitle">Рельеф дерева</div>
            <div className="examplesContBodyTextContent">

              Каждая доска проходит процесс обжига, броширования и пропитки маслами, что помогает
              древесине быть долговечней и естественней. Все эти манимупаляции придают дереву
              уникальный рельеф.
            </div>
          </div>
        </div>
        <div className="examplesContBody">
          <div className="examplesContBodyText">
            <div className="examplesContBodyTextTitle">Класная упаковка</div>
            <div className="examplesContBodyTextContent">
              Один из главнейших этапов - это упаковка, несколько слоев защиты и верхний
              призентабельный вид, делают нашу упаковку надежной и красивой.
            </div>
          </div>
          <img src="/static-img/2222.jpg" style={{height: '400px'}}/>

        </div>
        <div className="examplesContBody">
          <img src="/static-img/333.jpg"/>
          <div className="examplesContBodyText">
            <div className="examplesContBodyTextTitle">Сочность оттенков</div>
            <div className="examplesContBodyTextContent"> Мы используем японские технологи для
              максимальной
              точности передачи оттенков и цветов
            </div>
          </div>
        </div>
        <a name="yorPhoto"></a>
        <div className="yourPhoto">
          <div className="container">
            <div className="yourPhoto_title">
              Картина из вашей фотографии
            </div>
            <div className="yourPhoto_description">

              Вы можете заказать картины со своим изображением, просто отправте его нам, мы
              обработаем
              его и вы получите результат.
            </div>
            <div className="yourPhoto_examples">
              <div className="grid yourPhoto_item">
                <figure className="effect-bubba">
                  <img src="/static-img/m1.jpg" alt="img02"/>
                  <figcaption>
                    <h2>Ваше <span>Фото</span></h2>
                    <p>Загрузите изображение</p>
                  </figcaption>
                </figure>
              </div>
              <div className="grid yourPhoto_item">
                <figure className="effect-bubba">
                  <img src="/static-img/m2.jpg" alt="img02"/>
                  <figcaption>
                    <h2>Изготовление <span>картины</span></h2>
                    <p>В максимальные сроки</p>
                  </figcaption>
                </figure>
              </div>

              <div className="grid yourPhoto_item">
                <figure className="effect-bubba">
                  <img src="/static-img/m3.jpg" alt="img02"/>
                  <figcaption>
                    <h2>Супер <span>Результат</span></h2>
                    <p>Качество мы гарантируем</p>
                  </figcaption>
                </figure>
              </div>

            </div>
          </div>
        </div>
        <div className="processGetting fullWidth backgroundImage"
             style={{backgroundImage: "url('/static-img/top-image-4.jpg')"}}
          // style="background-image:url('/static-img/top-image-4.jpg')"
        >
          <div className="container">
            <div className="processGetting_title">
              Как получить картину
            </div>
          </div>
          <div className="container fullWidth">
            <div className="processGetting_cont">
              <div className="processGetting_block_left">
                <div className="processGetting_block_left_item">
                  <div className="processGetting_block_left_item_title">ЗАКАЗ</div>
                  <div className="processGetting_block_left_item_text">
                    <ul>
                      <li>- Звонок менеджера</li>
                      <li>- Уточнение размера</li>
                      <li>- Сроки и цена</li>
                      <li>- Дополнительное инфо</li>
                    </ul>
                  </div>
                </div>
                <div className="processGetting_block_left_item">
                  <div className="processGetting_block_left_item_title">ИЗГОТОВЛЕНИЕ</div>
                  <div className="processGetting_block_left_item_text">
                    <ul>
                      <li>- Подготовка материалов</li>
                      <li>- Брошировка, обжиг</li>
                      <li>- УФ печать, состаривание</li>
                      <li>- Покраска, лакирование</li>
                    </ul>
                  </div>
                </div>
                <div className="processGetting_block_left_item">
                  <div className="processGetting_block_left_item_title">ОТПРАВКА</div>
                  <div className="processGetting_block_left_item_text">
                    <ul>
                      <li>- Упаковка</li>
                      <li>- Подарок для каждого</li>
                      <li>- Отправка</li>
                      <li>- Трекинг</li>
                    </ul>
                  </div>
                </div>

                <div className="processGetting_block_left_item">
                  <div className="processGetting_block_left_item_title">РЕЗУЛЬТАТ</div>
                  <div className="processGetting_block_left_item_text">
                    <ul>
                      <li>- Отличный предмет интерьера</li>
                      <li>- Эмоции от приятного подарка</li>
                    </ul>
                  </div>
                  <img src="/static-img/ex.png" className="processGetting_block_left_item_img"/>
                </div>
              </div>
              <div className="processGetting_block_center"></div>
              <div className="processGetting_block_right">
                <div className="processGetting_block_right_btn">
                  <div className="buyNow2_arrow">
                    <img src="/static-img/red-arrow.png" alt=""/>
                  </div>
                  <span>Бесплатная консультанция</span>
                </div>
                <img className="processGetting_block_right_back" src="/static-img/backLitle.png"
                     alt=""/>
              </div>
            </div>
          </div>
        </div>
        <a name="quest"></a>
        <div className="questions">
          <div className="container">
            <div className="questions_title">Часто задаваемые вопросы:</div>
            <ul className="accordion">
              <li className="accordion_item">
                <input type="checkbox" className="accordion_toggle" id="toggle-05" defaultChecked hidden/>
                  <label className="accordion_trigger" htmlFor="toggle-05">Гниют ли доски?</label>
                  <div className="accordion_target">
                    <p>
                      Нет, мы применяем лучшие материалы, которые не вредны здоровью, которые
                      защищают картину от внешних воздействий.
                    </p>
                  </div>
              </li>
              <li className="accordion_item">
                <input type="checkbox" className="accordion_toggle" id="toggle-06" defaultChecked hidden/>
                  <label className="accordion_trigger" htmlFor="toggle-06">Как происходит перенос
                    изображения?</label>
                  <div className="accordion_target">
                    <p>
                      Путем многолетних эксперементов мы добились максимальной цветопередачи и
                      насыщенности цветов при переносе изображений с помощью УФ печати.
                    </p>
                  </div>
              </li>
              <li className="accordion_item">
                <input type="checkbox" className="accordion_toggle" id="toggle-066" hidden/>
                  <label className="accordion_trigger" htmlFor="toggle-066">Срок изготовления?</label>
                  <div className="accordion_target">
                    <p>
                      Мы изготавливаем картины за 5-6 рабочих дней.
                    </p>
                  </div>
              </li>
              <li className="accordion_item">
                <input type="checkbox" className="accordion_toggle" id="toggle-07" hidden/>
                  <label className="accordion_trigger" htmlFor="toggle-07">Изображение будет
                    четким?</label>
                  <div className="accordion_target">
                    <p>
                      Да. Мы переносим изображение японским, промышленным принтером, где точность и
                      четкость цветов на первом месте.
                    </p>
                  </div>
              </li>
              <li className="accordion_item">
                <input type="checkbox" className="accordion_toggle" id="toggle-08" hidden/>
                  <label className="accordion_trigger"  htmlFor="toggle-08">Требования к фото?</label>
                  <div className="accordion_target">
                    <p>
                      Если вы хотите получить на картине ваше изображение, тогда оно должно быть
                      нормального качества. Минимальный размер 2000на1500 пикселей, если вы не
                      знаете как посмотреть размер, присылайте свою картинку и мы поможем вам.
                      Подойдет фото с вашего телефона!
                    </p>
                  </div>
              </li>
              <li className="accordion_item">
                <input type="checkbox" className="accordion_toggle" id="toggle-09" hidden/>
                  <label className="accordion_trigger" htmlFor="toggle-09">Как крепится?</label>
                  <div className="accordion_target">
                    <p>
                      Все картины крепятся на толстую веревку, находящуюся сзади. В коплекте идут
                      крепления для стены, за который можно зацепить веревку. Тяжелые картины
                      крепятца на цепь или другой вид креплений.
                    </p>
                  </div>
              </li>
              <li className="accordion_item">
                <input type="checkbox" className="accordion_toggle" id="toggle-10" hidden/>
                  <label className="accordion_trigger" htmlFor="toggle-10">Оплата</label>
                  <div className="accordion_target">
                    <p>
                      Мы принимаем полную предоплату на карту или наложенный платеж.
                    </p>
                  </div>
              </li>
              <li className="accordion_item">
                <input type="checkbox" className="accordion_toggle" id="toggle-11" hidden />
                  <label className="accordion_trigger" htmlFor="toggle-10">Доставка</label>
                  <div className="accordion_target">
                    <p>
                      Доставка осуществляется курьерской службой Новоя Почта, по всей Украине.
                    </p>
                  </div>
              </li>
            </ul>
          </div>

        </div>
        <div className="buyNow2 fullWidth backgroundImage"
             style={{backgroundImage: "url('/static-img/buy1.jpg')"}}
          // style="background-image:url('/static-img/buy1.jpg')"
        >

          <div className="buyNowContBodyText2">
            <div className="buyNowContBodyTextTitle2">ПОДАРОК ВТОРОЙ ПОЛОВИНЕ</div>
            <div className="buyNowContBodyTextContent2">
              <div className="buyNow2_arrow">
                <img src="/static-img/red-arrow.png" alt=""/>
              </div>
              <span>КУПИТЬ</span>
            </div>
          </div>
        </div>
        <a name="price"></a>
        <img src="/static-img/tt.png" alt="" className="papeImages"/>
        <div className="price">
          <div className="price_container">
            <div className="price_title">Цены картин на досках в Украине</div>
            <div className="price_prices">
              <div className="price_prices_squ">
                <div className="price_prices_squ_title">ПРЯМОУГОЛЬНАЯ</div>
                <div className="price_prices_squ_text">40x30 - <span>950</span>550 грн</div>
                <div className="price_prices_squ_text">60x40 - 700 грн<strong>Хит</strong></div>
                <div className="price_prices_squ_text">90x60 - 1300 грн<strong>Хит</strong></div>
                <div className="price_prices_squ_text">80x100 - 1600 грн</div>
                <div className="price_prices_squ_text">80x120 - 1900 грн</div>
                <div className="price_prices_squ_text">100x150 - 2800 грн</div>
                <div className="price_prices_squ_text">120x180 - 4000 грн</div>
              </div>
              <div className="price_prices_squ">
                <div className="price_prices_squ_title">КВАДРАТНАЯ</div>
                <div className="price_prices_squ_text">40x40 - 600 грн</div>
                <div className="price_prices_squ_text">60x60 - 800 грн</div>
                <div className="price_prices_squ_text">90x90 - 1700 грн <strong>Хит</strong></div>
                <div className="price_prices_squ_text">100x100 - 1800 грн</div>
                <div className="price_prices_squ_text">120x120 - 2300 грн</div>
                <div className="price_prices_squ_text">150x150 - 3500 грн</div>
                <div className="price_prices_squ_text">180x180 - 5000 грн</div>
              </div>
            </div>
            <div className="price_black"></div>
            <div className="price_add">
              <strong>Состаренные края: </strong><span> +10% от стоимости</span>
              <strong>БЕСПЛАТНО</strong>
            </div>
          </div>
        </div>
        <div className="buyNow2 fullWidth backgroundImage"
             style={{backgroundImage: "url('/static-img/buy2.jpg')"}}
          // style="background-image:url('/static-img/buy2.jpg')"
        >

          <div className="buyNowContBodyText2">
            <div className="buyNowContBodyTextTitle2">ПОДАРОК КОЛЛЕГЕ ИЛИ БОССУ</div>
            <div className="buyNowContBodyTextContent2">
              <div className="buyNow2_arrow">
                <img src="/static-img/red-arrow.png" alt=""/>
              </div>
              <span>КУПИТЬ</span>
            </div>
          </div>
        </div>
        <div className="socBlock">
          <h2 className="socBlock_title">
            Узнайте о нас больше в социальных сетях
          </h2>
          <div className="socBlock_cont">
            <div className="socBlock_facebook">
              <img src="/static-img/facebook.png" alt="Картины на досках facebook"/>
            </div>
            <div className="socBlock_inst">
              <div className="buyNow2_arrow">
                <img src="/static-img/red-arrow.png" alt=""/>
              </div>
              <img src="/static-img/inst.png" alt="Картины на досках instagram"/>
            </div>
            <div className="socBlock_youtube">
              <img src="/static-img/you.png" alt="Картины на досках youtube"/>
            </div>
          </div>

        </div>
        <div className="buyNowBlock fullWidth backgroundImage"
             style={{backgroundImage: "url('/static-img/slide_sosd5.jpg')"}}
          // style="background-image:url('/static-img/slide_sosd5.jpg')"

        >
          <div className="buyNowBlock_container">
            Мы клиенто-ориентированная мастерская! Каждый второй человек приходит к нам повторно.
            Это
            говорит о многом. Уже несколько лет наша мастерская создает картины на досках в Украине.
            Сотни довольных клиентов. Сотни картин нашли своего ценителя. Каждый клиент нам очень
            важен,
            так как продукция создается иммено для него, результат и качество превыше всего.
          </div>
        </div>
        <div className="orangeBlack">
          <img className="orangeBlack_body" src="/static-img/orange.png"/>
        </div>
        <div className="advantagesBlock">
          <img src="/static-img/tools2.png" alt="" className="advantagesBlock_tools"/>
          <div className="advantagesBlock_container">
            <div className="advantagesBlock_list">
              <div className="advantagesBlock_list_item">На рынке картин на досках уже <span
                className="blackColor">4</span> года.
              </div>
              <div className="advantagesBlock_list_item">Более <span
                className="blackColor">700</span>
                довольных клиентов.
              </div>
              <div className="advantagesBlock_list_item">Только <span
                className="blackColor">натуральные</span> материалы.
              </div>
              <div className="advantagesBlock_list_item"><span className="blackColor">Ручная</span>
                и
                аккуратная работа.
              </div>
              <div className="advantagesBlock_list_item">Индивидуальный подход.</div>
              <div className="advantagesBlock_list_item">Гарантия <span
                className="blackColor">1</span> год на
                все картины.
              </div>
            </div>
            <div className="advantagesBlock_tools_cont">

            </div>


          </div>
          {/*<img className="advantagesBlock_girl" src=""/>*/}
        </div>
        <div className="daBlock fullWidth"
             style={{backgroundImage: "url('/static-img/sd5.jpg')"}}
          // style="background-image:url('/static-img/sd5.jpg')"

        >
          <div className="daBlock_container">
            <div className="daBlock_title">
              Хотите Бесплатную обработку фото
              <br/>
              и ее визуализация в интерьере!
            </div>
            <div className="daBlock_desc">Не знаете что из этого выйдет? Довертесь нашим
              дизайнерам!
            </div>
            <div className="daBlock_btn">
              <div className="daBlock_btn_cont">
                <span>Бесплатная визуализация</span>
              </div>
            </div>
          </div>
        </div>
        <div className="socBlock">
          <div className="socBlock_cont">
            <div className="socBlock_facebook">
              <img src="/static-img/facebook.png" alt="Картины на досках facebook"/>
            </div>
            <div className="socBlock_inst">
              <div className="buyNow2_arrow">
                <img src="/static-img/red-arrow.png" alt=""/>
              </div>
              <img src="/static-img/inst.png" alt="Картины на досках instagram"/>
            </div>
            <div className="socBlock_youtube">
              <img src="/static-img/you.png" alt="Картины на досках youtube"/>
            </div>
          </div>

        </div>
        <div className="bottomBlock">
          <div className="container">
            <div className="bottomBlock_title"></div>
            <div className="bottomBlock_items">
              <div className="bottomBlock_item">
                <div className="bottomBlock_item_title">
                  ИНФОРМАЦИЯ
                </div>
                <div className="bottomBlock_item_text">
                  <a href="">Оплата</a>
                </div>
                <div className="bottomBlock_item_text">
                  <a href="">Доставка</a>
                </div>
                <div className="bottomBlock_item_text">
                  <a href="">Цены</a>
                </div>
                <div className="bottomBlock_item_text">
                  <a href="">Цены</a>
                </div>
              </div>
              <div className="bottomBlock_item">
                <div className="bottomBlock_item_title">
                  ИНФОРМАЦИЯ
                </div>
                <div className="bottomBlock_item_text">
                  <a href="">Оплата</a>
                </div>
                <div className="bottomBlock_item_text">
                  <a href="">Доставка</a>
                </div>
                <div className="bottomBlock_item_text">
                  <a href="">Цены</a>
                </div>
                <div className="bottomBlock_item_text">
                  <a href="">Цены</a>
                </div>
              </div>
              <div className="bottomBlock_item">
                <div className="bottomBlock_item_title">
                  ИНФОРМАЦИЯ
                </div>
                <div className="bottomBlock_item_text">
                  <a href="">Оплата</a>
                </div>
                <div className="bottomBlock_item_text">
                  <a href="">Доставка</a>
                </div>
                <div className="bottomBlock_item_text">
                  <a href="">Цены</a>
                </div>
                <div className="bottomBlock_item_text">
                  <a href="">Цены</a>
                </div>
              </div>
              <div className="bottomBlock_item">

                <div className="bottomBlock_item_text">
                  <a href=""></a>
                </div>
                <img src="/static-img/logo.png"
                     alt="" className="bottomBlock_itemIimg"/>
              </div>
            </div>
            <div className="bottomBlock_copy">© 2019 doshki.com | Все права защищены. Использование
              любых
              материалов только с разрешения администрации сайта.
            </div>
          </div>
        </div>

      </Fragment>
  )
  }
  }

  export default MainWrapper;