var express = require("express"),
http = require("http"),
app = express(),

toDos = [
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

app.use(express.static(__dirname + "/client"));
// командуем Express принять поступающие
// объекты JSON
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.post("/todos", function (req, res) {
    // сейчас объект сохраняется в req.body
    var newToDo = req.body;
    console.log(newToDo);
    toDos.push(newToDo);
    // отправляем простой объект
    res.json({"message":"Вы размещаетесь на сервере!"});
});
app.listen(3001);