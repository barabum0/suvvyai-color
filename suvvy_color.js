// ==UserScript==
// @name         Изменение акцента на suvvy.ai
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Изменение акцента в ЛК Suvvy AI
// @author       https://github.com/barabum0
// @match        *://*.suvvy.ai/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=suvvy.ai
// @grant        none
// ==/UserScript==

// Сделано при помощи ChatGPT, потому что в JS шарю, но не особо

(function() {
    'use strict';

    // Константа для нового значения оттенка (hue)
    const accentColorHUE = 270;

    // Функция для изменения CSS-переменных
    function changeCSSVariables() {
        // Массив с именами CSS-переменных, которые нужно изменить
        const variableNames = ['--p', '--s', '--n', '--b2', '--b3'];

        // Получение текущих стилей для корневого элемента
        const rootStyles = getComputedStyle(document.documentElement);

        // Проход по всем переменным для изменения их значений
        variableNames.forEach(variableName => {
            // Получение текущего значения переменной в формате HSL
            let currentHSLValue = rootStyles.getPropertyValue(variableName).trim();

            // Разбиение текущего значения на составляющие [hue, saturation, lightness]
            let [currentHue, ...rest] = currentHSLValue.split(/\s+/);

            // Задание нового значения для переменной с сохранением старых составляющих
            let newHSLValue = [accentColorHUE, ...rest].join(' ');

            // Применение нового значения к CSS-переменной
            document.documentElement.style.setProperty(variableName, newHSLValue);
        });
    }

    // Вызов функции для изменения CSS-переменных
    changeCSSVariables();
})();
