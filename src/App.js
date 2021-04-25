import {Div} from "@vkontakte/vkui";
import styles from './App.module.css';
import Vk from './assets/vk.svg';
import Piter from './assets/piter.jpg';
import Guy from './assets/guy.jpg';
import Accordion, {AccordionProvider} from "./component/Accordion";
import {useState} from "react";

function App() {
    const [selected, setSelected] = useState('');
    return (
        <Div className={styles.main}>
            <Div className={styles.section + ' ' + styles.first}>
                <p className={styles.vezdekod}>Вездекод —</p>
                <p className={styles.vezdekoddesc}>марафон по разработке и дизайну с призовым фондом 1,4 млн рублей. Первый тур соревнований пройдет в четырех городах очно и онлайн; финал состоится в конце октября в Санкт-Петербурге.</p>
            </Div>
            <Div className={styles.line} />
            <Div className={styles.section + ' ' + styles.second}>
                <p className={styles.onec}>1</p>
                <p className={styles.desc}>этап «Вездекода» пройдет с апреля по сентябрь в четырех российских городах — их точный список определится по итогам заявок от организаторов. Всем, кто не сможет приехать на соревнования лично, задания будут доступны онлайн.</p>
            </Div>
            <Div className={styles.line} />
            <Div className={styles.section + ' ' + styles.third}>
                <p>До финала доберутся только самые способные участники: 30 команд, в каждой из которых будет от одного до четырех человек, встретятся в петербургском офисе «ВКонтакте» 21–23 октября.</p>
                <img src={Piter} height={144} className={styles.piter}/>
            </Div>
            <Div className={styles.section + ' ' + styles.fourth}>
                <h2>
                    На пути к заветной цели разработчиков и дизайнеров ждут задания разных форматов и уровней сложности:
                </h2>
                <Div className={styles.container}>
                    <ul className={styles.list}>
                        <li>тесты</li>
                        <li>викторины</li>
                        <li>игры</li>
                        <li>ИТ-конкурсы</li>
                        <li>работа над оригинальными проектами</li>
                    </ul>
                    <img src={Guy} height={144} className={styles.piter}/>
                </Div>
            </Div>
            <Div className={styles.section}>
                <Div className={styles.roundedblock}>
                    Институт прикладной математики и компьютерных наук ТулГУ создан с целью совершенствования и дальнейшего развития математического, информационного образования в Тульском регионе и России в целом, углубления интеграции с ведущими профильными  институтами, более рационального использования научного потенциала, обеспечения единого руководства учебной и научной деятельностью в области математики и компьютерных наук в регионе.
                </Div>
            </Div>
            <Div className={styles.section + ' ' + styles.sixth}>
                <p>
                    Студенты института активно занимаются научно-исследовательской деятельностью, участвуют в творческих конкурсах.
                </p>
                <p>
                    Сам институт организовывает хакатоны или олимпиады, к примеру, Вездекод
                </p>
            </Div>
            <AccordionProvider value={selected}>
                <Accordion title={'SENLA'} onSelect={(id) => setSelected(id)} id={'senla'}>
                    <p className={styles.senla}>международная компании по разработке заказного ПО в областях</p>
                    <Div className={styles.senlacont}>
                        <ul>
                            <li>финансовых технологий</li>
                            <li>медицины</li>
                            <li>фармацевтики</li>
                        </ul>
                        <ul>
                            <li>нефтегазового сектора</li>
                            <li>машиностроения</li>
                            <li>производства</li>
                        </ul>
                    </Div>
                </Accordion>
                <Accordion title={'DD Planet'} onSelect={(id) => setSelected(id)} id={'dd'}>
                    <p className={styles.dd}>
                        разрабатывает высоконагруженные веб-сервисы, сложные мобильные приложения, корпоративные порталы и информационно-аналитические системы более 17 лет, входит в рейтинг веб-разработчиков и интеграторов России Tagline, побеждал в конкурсах «Премия Рунета», «Золотой сайт», Tagline Awards и ComNews Awards. Офисы компании расположены в Туле, Москве и Калуге. Сегодня в них работают более 170 человек.
                    </p>
                </Accordion>
                <Accordion title={'«Максимастер»'} onSelect={(id) => setSelected(id)} id={'max'}>
                    <p className={styles.maxim}>Это веб-интегратор, который с 2002 года разрабатывает и поддерживает технически сложные высоконагруженные веб-проекты для лидеров российского бизнеса. Специализируется на решениях для электронной коммерции, внутренних порталах, B2B-платформах и CRM.</p>
                </Accordion>
                <Accordion title={'SmartBear'} onSelect={(id) => setSelected(id)} id={'bear'}>
                    <p className={styles.bear}>создаёт решения для управления жизненным циклом API, автоматизации тестирования, тест-менеджмента, нагрузочного тестирования и код-ревью. У компании есть несколько представительств в разных странах, единственный в России офис находится в Туле. В нём работают более 100 человек — они создают ПО, которое помогает другим компаниям делать собственные продукты быстрее и качественнее!</p>
                    <h2 className={styles.bearh}>Quality isn’t just a goal. It’s the whole point</h2>
                </Accordion>
                <Accordion title={'Google Developers Group'} onSelect={(id) => setSelected(id)} id={'g'}>
                    <p className={styles.g}>некоммерческое IT-сообщество, в основе которого лежат технологии Google для разработчиков (Android, Flutter, Firebase, Google Cloud Platform, Angular и другие). GDG регулярно организует различные IT-мероприятия, конференции, хакатоны, принимает участие в локальных и международных конкурсах, разрабатывает совместные проекты и обменивается знаниями.</p>
                </Accordion>
                <Accordion title={'ГАУ ТО ЦИТ'} onSelect={(id) => setSelected(id)} id={'cit'}>
                    <p className={styles.cit}>Миссия компании — повысить качество жизни людей с помощью информационных технологий. Подведомственное учреждение Министерства по информатизации, связи и вопросам открытого управления Тульской области с 2012 года информатизирует важнейшие социальные объекты области: медучреждения, детские сады и школы.</p>
                </Accordion>
            </AccordionProvider>
            <Div className={styles.button}>
                Перейти
            </Div>
            <Div className={styles.footer}>
                <p>© 2020</p>
                <p>Все права защищены. Команда "Думеры".</p>
            </Div>
        </Div>
    );
}

export default App;
