document.addEventListener('DOMContentLoaded', () => {
    let container = document.querySelector('.container');
    for (let j = 0; j < 4; j++) {
        let loader = document.createElement('div');
        loader.classList.add('loader');
        loader.style.setProperty('--j', j);
        for (let i = 1; i <= 20; i++) {
            let span = document.createElement('span');
            span.style.setProperty('--i', i)
            loader.appendChild(span);
        }
        container.appendChild(loader);
    }
})

/*Этот код выполняет следующие действия:

Ждет загрузки всего HTML-документа:
document.addEventListener('DOMContentLoaded', () => {

Это событие DOMContentLoaded срабатывает, когда весь HTML-документ загружен и разобран, но без ожидания загрузки стилей, изображений и подкастов.

Находит элемент с классом .container:
let container = document.querySelector('.container');
Использует метод querySelector для поиска первого элемента с классом container.

Создает 4 элемента с классом .loader и добавляет их в контейнер:
for (let j = 0; j < 4; j++) {
    let loader = document.createElement('div');
    loader.classList.add('loader');
    loader.style.setProperty('--j', j);
В этом цикле создается 4 новых div элемента, каждый из которых получает класс loader. Также устанавливается кастомное CSS свойство --j равное текущему значению счетчика j.

Для каждого .loader создается 20 span элементов:

    for (let i = 1; i <= 20; i++) {
        let span = document.createElement('span');
        span.style.setProperty('--i', i)
        loader.appendChild(span);
    }
    container.appendChild(loader);
}
Внутри каждого созданного .loader элемента, вложенным циклом создаются 20 span элементов. Для каждого span устанавливается кастомное CSS свойство --i, равное текущему значению счетчика i. Затем каждый span добавляется как дочерний элемент к текущему .loader. После завершения внутреннего цикла, .loader добавляется к контейнеру. */