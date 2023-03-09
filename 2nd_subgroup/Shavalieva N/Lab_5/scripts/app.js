$(function() {
    'use strict';
  
    var toDos = [
        "9:00 Прием у врача-терапевта (пациент: пес Шарик)",
        "12:00 Вакцинация от бешенства Rabies (пациент: кот Рыжик)",
        "13:00 - 14:00 Обед",
        "14:00 Ответить на электронные письма",
        "Подготовиться к лекции в понедельник",
        "Обновить несколько новых задач",
        "17:00 Удаление молочных зубов (пациент: пес Робин)"
        ];

        $(".tabs a span").toArray().forEach(function (element) {
            
            //создаем обработку щелчков для кадого элемента
            $(element).on("click", function () {
                //создаем временную переменную
                var $element = $(element),
                $content;
                $(".tabs a span").removeClass("active");
                $element.addClass("active");
                $("main .content").empty();
    
    
                if($element.parent().is(":nth-child(1)")) {
                    $content = $("<ul>");
                    for (var i = toDos.length; i > -1; i--) {
                        $content.append($("<li>").text(toDos[i]));
                    } 
                    $("main .content").append($content);
                    
                } else if ($element.parent().is(":nth-child(2)")) {
                    $content = $("<ul>");
                    toDos.forEach(function (todo) {
                        $content.append($("<li>").text(todo));
                    });
                    $("main .content").append($content);
    
                } else if ($element.parent().is(":nth-child(3)")) {
                    $(".content").append("<input>");
                    $(".content").append("<br />");
                    $(".content").append("<button>+</button>");
                    $(".content input").addClass("inputStyle");
                    $(".content br").addClass("clear");
                    $(".content button").addClass("buttonStyle");
                } 
            
            });
            
        });
        $(".tabs a:first-child span").trigger("click");

        $(".content").on("click", ".buttonStyle", function() {
            if ($(".inputStyle").val() != "") {
                toDos.push($(".inputStyle").val());
                alert("Предложение успешно добавлено в список!");
            }
            else {
                alert("ERROR: Длина добавляемого предложения должна быть > 0");
            }
        });
  }); 
