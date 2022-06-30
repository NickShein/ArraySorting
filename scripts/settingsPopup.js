export default function settingsPopup(){
    let settingsObj = {};
    let popupBg = document.querySelector('.popup__bg'); // Фон попап окна
    let popup = document.querySelector('.popup'); // Само окно
    let openPopupButtons = document.querySelectorAll('.open-popup'); // Кнопки для показа окна
    let closePopupButton = document.querySelector('.close-popup'); // Кнопка для скрытия окна
    openPopupButtons.forEach((button) => { // Перебираем все кнопки
        button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
            e.preventDefault(); // Предотвращаем дефолтное поведение браузера
            popupBg.classList.add('active'); // Добавляем класс 'active' для фона
            popup.classList.add('active'); // И для самого окна
        })
    });

    closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
    });
    document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
        if (e.target === popupBg) { // Если цель клика - фот, то:
            popupBg.classList.remove('active'); // Убираем активный класс с фона
            popup.classList.remove('active'); // И с окна
        }
    });
    document.querySelector('.submit-popup').addEventListener('click', (e) =>{
        settingsObj.charsToLeft = document.querySelector('.select-css').value;
        settingsObj.delimiterOfSorting = document.querySelector('input[name="delimiterIn"]').value;
        settingsObj.delimiterOutput = document.querySelector('input[name="delimiterOut"]').value;

        settingsObj.sort_direction = document.querySelector('input[name="contact"]:checked').value;

        popupBg.classList.remove('active'); // Убираем активный класс с фона
        popup.classList.remove('active'); // И с окна
        console.log(settingsObj);
        return settingsObj;
    });
}