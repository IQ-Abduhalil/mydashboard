import '../footer/footer.scss';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  TableFooter,
  Typography,
} from '@mui/material';

import kiwiLogoGrey from '../../assets/img/kiwi__logo__grey.png';
import logoAndroidStore from '../../assets/img/Button__Android.png';
import logoIosStore from '../../assets/img/Button__AppStore.png';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
export const Footer = () => {
  const [expanded1, setExpanded1] = React.useState('');
  const [expanded2, setExpanded2] = React.useState('');
  const [expanded3, setExpanded3] = React.useState('');
  const [expanded4, setExpanded4] = React.useState('');
  const [expanded5, setExpanded5] = React.useState('');
  const [expanded6, setExpanded6] = React.useState('');
  const [expanded7, setExpanded7] = React.useState('');
  const [expanded8, setExpanded8] = React.useState('');

  const handleChange1 = (panel) => (event, newExpanded1) => {
    setExpanded1(newExpanded1 ? panel : false);
    event.stopPropagation();
  };
  const handleChange2 = (panel) => (event, newExpanded2) => {
    setExpanded2(newExpanded2 ? panel : false);
    event.stopPropagation();
  };
  const handleChange3 = (panel) => (event, newExpanded3) => {
    setExpanded3(newExpanded3 ? panel : false);
    event.stopPropagation();
  };
  const handleChange4 = (panel) => (event, newExpanded4) => {
    setExpanded4(newExpanded4 ? panel : false);
    event.stopPropagation();
  };
  const handleChange5 = (panel) => (event, newExpanded5) => {
    setExpanded5(newExpanded5 ? panel : false);
    event.stopPropagation();
  };
  const handleChange6 = (panel) => (event, newExpanded6) => {
    setExpanded6(newExpanded6 ? panel : false);
    event.stopPropagation();
  };
  const handleChange7 = (panel) => (event, newExpanded7) => {
    setExpanded7(newExpanded7 ? panel : false);
    event.stopPropagation();
  };
  const handleChange8 = (panel) => (event, newExpanded8) => {
    setExpanded8(newExpanded8 ? panel : false);
    event.stopPropagation();
  };
  return (
    <footer className="footer">
      <div className="footer__inner__wrapper">
        <div className="footer__first__box">
          <div className="footer__first__wrapper">
            <img src={kiwiLogoGrey} alt="kiwiLogoGrey" />
            <h4 className="footer__title">
              Продай, найди, купи все что ты пожелаешь
            </h4>
          </div>
          <span className="footer__first__box__text">
            Веб сайт бесплатных обьявлений | на базе имеется 234 944 999 шт
            обяления
          </span>
          <div className="wrapper__for__btn">
            <button className="btn__android">
              <img src={logoAndroidStore} alt="logoAndroidStore" />
            </button>
            <button className="btn__ios">
              <img src={logoIosStore} alt="logoIosStore" />
            </button>
          </div>
        </div>

        <div className="links__wrapper">
          <Box
            className="box_material"
            sx={{ width: '18rem', backgroundColor: '#33383C' }}
          >
            <Accordion
              expanded={expanded1 === 'panel1'}
              onChange={handleChange1('panel1')}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <li>
                  <a href="#">Автомобили</a>
                </li>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>
                    <a href="#">Автомобили</a>
                  </li>
                  <li>
                    <a href="#"> Легковые авто</a>
                  </li>
                  <li>
                    <a href="#">Мото</a>
                  </li>
                  <li>
                    <a href="#">Автобусы</a>
                  </li>
                  <li>
                    <a href="#">Грузовые авто</a>
                  </li>
                  <li>
                    <a href="#">Сельхозтехника</a>
                  </li>
                  <li>
                    <a href="#">Запчасти и Аксессуары</a>
                  </li>
                  <li>
                    <a href="#">Прицепы и Спецтехника</a>
                  </li>
                  <li>
                    <a href="#">Водный и Другой транспортa</a>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            className="box_material"
            sx={{ width: '18rem', backgroundColor: '#33383C' }}
          >
            <Accordion
              expanded={expanded2 === 'panel1'}
              onChange={handleChange2('panel1')}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <li>
                  <a href="#">Автомобили</a>
                </li>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>
                    <a href="#">Автомобили</a>
                  </li>
                  <li>
                    <a href="#"> Легковые авто</a>
                  </li>
                  <li>
                    <a href="#">Мото</a>
                  </li>
                  <li>
                    <a href="#">Автобусы</a>
                  </li>
                  <li>
                    <a href="#">Грузовые авто</a>
                  </li>
                  <li>
                    <a href="#">Сельхозтехника</a>
                  </li>
                  <li>
                    <a href="#">Запчасти и Аксессуары</a>
                  </li>
                  <li>
                    <a href="#">Прицепы и Спецтехника</a>
                  </li>
                  <li>
                    <a href="#">Водный и Другой транспортa</a>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            className="box_material"
            sx={{ width: '18rem', backgroundColor: '#33383C' }}
          >
            <Accordion
              expanded={expanded3 === 'panel1'}
              onChange={handleChange3('panel1')}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <li>
                  <a href="#">Автомобили</a>
                </li>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>
                    <a href="#">Автомобили</a>
                  </li>
                  <li>
                    <a href="#"> Легковые авто</a>
                  </li>
                  <li>
                    <a href="#">Мото</a>
                  </li>
                  <li>
                    <a href="#">Автобусы</a>
                  </li>
                  <li>
                    <a href="#">Грузовые авто</a>
                  </li>
                  <li>
                    <a href="#">Сельхозтехника</a>
                  </li>
                  <li>
                    <a href="#">Запчасти и Аксессуары</a>
                  </li>
                  <li>
                    <a href="#">Прицепы и Спецтехника</a>
                  </li>
                  <li>
                    <a href="#">Водный и Другой транспортa</a>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            className="box_material"
            sx={{ width: '18rem', backgroundColor: '#33383C' }}
          >
            <Accordion
              expanded={expanded4 === 'panel1'}
              onChange={handleChange4('panel1')}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <li>
                  <a href="#">Автомобили</a>
                </li>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>
                    <a href="#">Автомобили</a>
                  </li>
                  <li>
                    <a href="#"> Легковые авто</a>
                  </li>
                  <li>
                    <a href="#">Мото</a>
                  </li>
                  <li>
                    <a href="#">Автобусы</a>
                  </li>
                  <li>
                    <a href="#">Грузовые авто</a>
                  </li>
                  <li>
                    <a href="#">Сельхозтехника</a>
                  </li>
                  <li>
                    <a href="#">Запчасти и Аксессуары</a>
                  </li>
                  <li>
                    <a href="#">Прицепы и Спецтехника</a>
                  </li>
                  <li>
                    <a href="#">Водный и Другой транспортa</a>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            className="box_material"
            sx={{ width: '18rem', backgroundColor: '#33383C' }}
          >
            <Accordion
              expanded={expanded5 === 'panel1'}
              onChange={handleChange5('panel1')}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <li>
                  <a href="#">Автомобили</a>
                </li>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>
                    <a href="#">Автомобили</a>
                  </li>
                  <li>
                    <a href="#"> Легковые авто</a>
                  </li>
                  <li>
                    <a href="#">Мото</a>
                  </li>
                  <li>
                    <a href="#">Автобусы</a>
                  </li>
                  <li>
                    <a href="#">Грузовые авто</a>
                  </li>
                  <li>
                    <a href="#">Сельхозтехника</a>
                  </li>
                  <li>
                    <a href="#">Запчасти и Аксессуары</a>
                  </li>
                  <li>
                    <a href="#">Прицепы и Спецтехника</a>
                  </li>
                  <li>
                    <a href="#">Водный и Другой транспортa</a>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            className="box_material"
            sx={{ width: '18rem', backgroundColor: '#33383C' }}
          >
            <Accordion
              expanded={expanded6 === 'panel1'}
              onChange={handleChange6('panel1')}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <li>
                  <a href="#">Автомобили</a>
                </li>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>
                    <a href="#">Автомобили</a>
                  </li>
                  <li>
                    <a href="#"> Легковые авто</a>
                  </li>
                  <li>
                    <a href="#">Мото</a>
                  </li>
                  <li>
                    <a href="#">Автобусы</a>
                  </li>
                  <li>
                    <a href="#">Грузовые авто</a>
                  </li>
                  <li>
                    <a href="#">Сельхозтехника</a>
                  </li>
                  <li>
                    <a href="#">Запчасти и Аксессуары</a>
                  </li>
                  <li>
                    <a href="#">Прицепы и Спецтехника</a>
                  </li>
                  <li>
                    <a href="#">Водный и Другой транспортa</a>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            className="box_material"
            sx={{ width: '18rem', backgroundColor: '#33383C' }}
          >
            <Accordion
              expanded={expanded7 === 'panel1'}
              onChange={handleChange7('panel1')}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <li>
                  <a href="#">Автомобили</a>
                </li>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>
                    <a href="#">Автомобили</a>
                  </li>
                  <li>
                    <a href="#"> Легковые авто</a>
                  </li>
                  <li>
                    <a href="#">Мото</a>
                  </li>
                  <li>
                    <a href="#">Автобусы</a>
                  </li>
                  <li>
                    <a href="#">Грузовые авто</a>
                  </li>
                  <li>
                    <a href="#">Сельхозтехника</a>
                  </li>
                  <li>
                    <a href="#">Запчасти и Аксессуары</a>
                  </li>
                  <li>
                    <a href="#">Прицепы и Спецтехника</a>
                  </li>
                  <li>
                    <a href="#">Водный и Другой транспортa</a>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            className="box_material"
            sx={{ width: '18rem', backgroundColor: '#33383C' }}
          >
            <Accordion
              expanded={expanded8 === 'panel1'}
              onChange={handleChange8('panel1')}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <li>
                  <a href="#">Автомобили</a>
                </li>
              </AccordionSummary>
              <AccordionDetails>
                <ul>
                  <li>
                    <a href="#">Автомобили</a>
                  </li>
                  <li>
                    <a href="#"> Легковые авто</a>
                  </li>
                  <li>
                    <a href="#">Мото</a>
                  </li>
                  <li>
                    <a href="#">Автобусы</a>
                  </li>
                  <li>
                    <a href="#">Грузовые авто</a>
                  </li>
                  <li>
                    <a href="#">Сельхозтехника</a>
                  </li>
                  <li>
                    <a href="#">Запчасти и Аксессуары</a>
                  </li>
                  <li>
                    <a href="#">Прицепы и Спецтехника</a>
                  </li>
                  <li>
                    <a href="#">Водный и Другой транспортa</a>
                  </li>
                </ul>
              </AccordionDetails>
            </Accordion>
          </Box>
        </div>

        <div className="footer__end__box">
          <ul className="footer__end__items">
            <li ><Link className="footer__end__item" to="">Подать объявление</Link></li>
            <li ><Link className="footer__end__item" to="">Объявления</Link></li>
            <li ><Link className="footer__end__item" to="">Магазины</Link></li>
            <li ><Link className="footer__end__item" to="">Помощь</Link></li>
            <li ><Link className="footer__end__item" to="">Безопасность</Link></li>
            <li ><Link className="footer__end__item" to="">Реклама на сайте</Link></li>
            <li ><Link className="footer__end__item" to="">О компании</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
