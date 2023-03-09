var toDoObjects = [
    {
        "description" : "9:00 Прием у врача-терапевта (пациент: пес Шарик)",
        "tags" : ["лечение", "работа"]
    },
    {
        "description" : "12:00 Вакцинация от бешенства Rabies (пациент: кот Рыжик)",
        "tags" : ["лечение", "работа"]
    },
    {
        "description" : "13:00 - 14:00 Обед",
        "tags" : ["перерыв"]
    },
    {
        "description" : "14:00 Ответить на электронные письма",
        "tags" : ["работа"]
    },
    {
        "description" : "Подготовиться к лекции в понедельник",
        "tags" : ["работа", "преподавание"]
    },
    {
        "description" : "Обновить несколько новых задач",
        "tags" : ["работа"]
    },
    {
        "description" : "17:00 Удаление молочных зубов (пациент: пес Робин)",
        "tags" : ["лечение", "работа"]
    }
];

var organizeByTags = function (toDoObjects) {
    // создание пустого массива для тегов
    var tags = [];
    // перебираем все задачи toDos
    toDoObjects.forEach(function (toDo) {
    // перебираем все теги для каждой задачи
    toDo.tags.forEach(function (tag) {
    // убеждаемся, что этого тега
    // еще нет в массиве
    if (tags.indexOf(tag) === -1) {
    tags.push(tag);
    }
    });
    });
    console.log(tags);

    var tagObjects = tags.map(function (tag) {
        // здесь мы находим все задачи,
        // содержащие этот тег
        var toDosWithTag = [];
        toDoObjects.forEach(function (toDo) {
            // проверка, что результат
            // indexOf is *не* равен -1
            if (toDo.tags.indexOf(tag) !== -1) {
                toDosWithTag.push(toDo.description);
            }
        });
        // мы связываем каждый тег с объектом, который
        // содержит название тега и массив
        return { "name": tag, "toDos": toDosWithTag };
    });
    console.log(tagObjects);
};

var main = function () {
    "use strict";
    var organizeByTags = function () {
        console.log("organizeByTags вызвана");
    };
    organizeByTags(toDoObjects);
};
$(document).ready(main);