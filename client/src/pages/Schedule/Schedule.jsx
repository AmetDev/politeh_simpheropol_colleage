"use client";
import { fetchSchedule } from "@app/store/schedule/scheduleSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Schedule.module.scss";
import Link from "next/link";
import bellImg from "@public/assets/images/schedule/bell.jpg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const Schedule = () => {
  const dispatch = useDispatch();
  const { schedule } = useSelector((state) => state.schedule);

  const isPostsLoading = schedule.status === "loading";
  useEffect(() => {
    dispatch(fetchSchedule());
  }, []);

  const IsRender = ({ isPostsLoading }) => {
    if (!isPostsLoading) {
      return (
        <main className={style.scheduleRoot}>
          <span>{schedule.items.date}</span>
          <section className={style.wrapperCorpus}>
            <span>Первый корпус</span>
            <Zoom zoomMargin={5} zoomZindex={1000}>
              <Image
                src={schedule.items.scheduleOne}
                width={800}
                height={800}
              />
            </Zoom>
          </section>
          <section className={style.wrapperCorpus}>
            <span>Второй корпус</span>
            <Zoom zoomMargin={5} zoomZindex={1000}>
              <Image
                src={schedule.items.scheduleTwo}
                width={800}
                height={800}
              />
            </Zoom>
          </section>

          <section className={style.schedule__block}>
            <ul>
              <li>
                <Link href="/our-colleage/special-schedule-1">
                  Расписание занятий 2022-{new Date().getFullYear()} учебного
                  года группы: 34зМ, 34зТВ, 34зТМ, 34зТХ, 4зТХ, 34зХ, 34зКС,
                  4зКС заочной формы обучения на период с 10.04.2023 г. по
                  22.04.2023 г.
                </Link>
              </li>

              <li>
                <Link href="/our-colleage/special-schedule-2">
                  Расписание занятий установочной сессии 2023-
                  {new Date().getFullYear()} учебного года группы 1 курса
                  заочной формы обучения на период с 15.09.2023 г. по 21.09.2023
                  г.
                </Link>
              </li>
            </ul>
          </section>

          <Link
            className={style.schedule__correspondence}
            href="/our-colleage/schedule-for-correspondence"
          >
            ГРАФИК УЧЕБНОГО ПРОЦЕССА ПО ЗАОЧНОЙ ФОРМЕ ОБУЧЕНИЯ
          </Link>

          <section className={style.schedule__bell}>
            <h1>Расписание звонков</h1>

            <div className={style.schedule__bell__notification}>
              <p>Внимание, уважаемые преподаватели и студенты!</p>
              <p>
                ВНЕСЕНЫ ИЗМЕНЕНИЯ В РАСПИСАНИЕ ЗВОНКОВ И ПРОДОЛЖИТЕЛЬНОСТИ
                ПЕРЕМЕН!
              </p>
            </div>

            <p>
              На основании Рекомендаций по профилактике новой коронавирусной
              инфекции (COVID-19) в профессиональных образовательных
              организациях (Методические рекомендации МР 3.1/2.4.0206-20)
              Федеральной службы по надзору в сфере защиты прав потребителя и
              благополучия населения, во исполнение письма Министерства
              образования, науки и молодежи Республики Крым
            </p>

            <Image
              src={bellImg}
              alt="Расписание звонков"
              width={1572}
              height={1163}
            />
          </section>
        </main>
      );
    } else {
      return <div>загрузка данных</div>;
    }
  };
  return (
    <section className={style.schedule}>
      <IsRender isPostsLoading={isPostsLoading} />
    </section>
  );
};

export default Schedule;
{
  /* <DaySelector />
				<Favourited data={data} />
				<Corpus title='Первый корпус' data={data.first} />
				<Corpus title='Второй корпус' data={data.second} />
				 */
}
//	dispatch(loadState())
// const fetchingData = async () => {
// 	try {
// 		const data = await axios.get(
// 			`${process.env.NEXT_PUBLIC_SERVER_URL}/schedule/scheduleone`
// 		)

// 		setDataSchedule({ ...data })
// 	} catch (error) {
// 		console.log(error)
// 	}
// }
// fetchingData()
// const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']

// const scheduleOfGroup = [
// 	{ name: 'основы жизни', lecturer: 'Власенко', cabinet: 225 },
// 	{ name: 'инфор. технологии', lecturer: 'Акимова', cabinet: 307 },
// 	{ name: 'БЖД', lecturer: 'Маланьин', cabinet: 216 },
// 	{},
// 	{ name: 'технические штуки', lecturer: 'Клементьев', cabinet: 109 },
// 	{ name: 'история', lecturer: 'Пшеничная', cabinet: 112 },
// ]

// const scheduleLine = [
// 	['12ИСП-В', scheduleOfGroup],
// 	['22ГГВП', scheduleOfGroup],
// 	['12ИСП-П', scheduleOfGroup],
// 	['23ИСП-В', scheduleOfGroup],
// 	['12ИМД', scheduleOfGroup],
// 	['12ИСП-В', scheduleOfGroup],
// ]

// const scheduleData = {
// 	monday: [
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 	],
// 	tuesday: [
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 	],
// 	wednesday: [
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 	],
// 	thursday: [
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 	],
// 	friday: [
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 		scheduleLine,
// 	],
// }

// // TODO: Добавить адаптацию с +- 1250 пикселей

// const data = {
// 	first: scheduleData,
// 	second: scheduleData,
// }
