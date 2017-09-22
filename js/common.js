$("select").change(function(){
    if($(this).val() == 0) {$('#btn').text("Отправить")};
    if($(this).val() == 1) {$('#btn').text("Послать")};
    if($(this).val() == 2) {$('#btn').text("Вызвать")};
});

$(function(){
  $("#inputTel").mask("+7(999) 999-99-99");
});