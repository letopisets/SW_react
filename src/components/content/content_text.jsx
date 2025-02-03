import { useEffect, useState } from "react";

const min = 1;
const max = 6;
let idEpisod = Math.floor(Math.random() * (max - min + 1)) + min;




const ContentText = () => {
    const [crawl, setCrawl] = useState(""); // Храним текст напрямую
    const [isLoading, setIsLoading] = useState(false); // Управляем состоянием загрузки
    const [message, setMessage] = useState(""); // Для отображения ошибок
    const opening_crawl = sessionStorage.getItem('opening_crawl');
    // Функция для получения текста с сервера
    const getOpeningCrawl = async () => {
        setIsLoading(true); // Устанавливаем состояние загрузки
        setMessage(""); // Сбрасываем сообщение об ошибке

        try {
            const response = await fetch(`https://sw-info-api.herokuapp.com/v1/films/${idEpisod}`);
            if (!response.ok) {
                throw new Error("Failed to fetch data"); // Обработка ошибок
            }
            const data = await response.json();
            setCrawl(data.opening_crawl);
            sessionStorage.setItem('opening_crawl', data.opening_crawl)// Сохраняем текст
        } catch (error) {
            setMessage(error.message); // Устанавливаем сообщение об ошибке
        } finally {
            setIsLoading(false); // Отключаем состояние загрузки
        }
    };


    useEffect(() => {
        getOpeningCrawl();
        // Запускаем загрузку данных при монтировании компонента
    }, []);


    return (
        <>
            {isLoading ? (
                <div className="spinner">
                    <span className="sr-only"></span>
                </div>// Отображение спиннера
            ) : message ? (
                <p className="error">{message}</p> // Отображение сообщения об ошибке
            ) : (
               <p className={'text-[2em] tracking-[.2em] leading-[1.5] text-justify p-0.5'}>{crawl}</p>
                // Отображение текста
            )}
        </>
    );
};

export default ContentText;