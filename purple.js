// ==UserScript==
// @name         Изменение стилей на suvvy.ai
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Изменение акцентного цвета
// @author       https://github.com/barabum0
// @match        *://*.suvvy.ai/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=suvvy.ai
// @grant        none
// ==/UserScript==

// Сделано при помощи ChatGPT, потому что в JS шарю, но не особо

(function() {
    'use strict';

    // Основной акцентный цвет
    const accentColor = 'mediumslateblue';
    // Субакцентный цвет
    const subAccentColor = 'mediumpurple';

    // Функция для изменения стилей элементов
    function changeStyles() {
        // Объект с информацией о классах и соответствующих им стилях
        const classStyles = {
            'btn-primary': { 'backgroundColor': accentColor, 'borderColor': subAccentColor },
            'text-primary': { 'color': accentColor },
            'bg-primary': { 'backgroundColor': accentColor },
            'inactive': { 'backgroundColor': 'white' },
            'chat-bubble-primary': { 'backgroundColor': accentColor }
        };

        // Проход по всем классам и их стилям
        for (const [className, styles] of Object.entries(classStyles)) {
            const elements = document.querySelectorAll(`.${className}`);
            elements.forEach(element => {
                for (const [styleName, styleValue] of Object.entries(styles)) {
                    element.style[styleName] = styleValue;
                }
            });
        }
    }

    // Вызов функции для первичного применения стилей
    changeStyles();

    // Наблюдение за изменениями DOM и применение стилей при изменениях
    const observer = new MutationObserver(changeStyles);
    observer.observe(document.body, { childList: true, subtree: true });
})();
