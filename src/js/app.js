$('form').submit(function() { //функция отправки с формы
  var validate = 1; //наш флаг 1=добро.
  var $input = $(this).find('.req'); /* поиск в <form>  класс req. $input= .req*/ 
  $input.each(function(i,e) { // перебираем инпуты циклом и выполняем для каждого функцию(index,element) в .req
    e = $(e); //e = элемент теперь объект jquery (input в <form>)
    if (e.val() === '') {//если значение строго равно пустой строке 
      e.parent().addClass('is-invalid'); //Добавить класс  к родителю инпута внутри <form>
      validate = 0; // Валидация не пройдена
    } else{//в другом случае
      e.parent().removeClass('is-invalid');//убрать класс инвалид
      e.parent().addClass('is-valid');// добавить класс валид
    }
  });
  if (!validate) { // проверка, если validation 0, не отправлять
    return false;
  }
});
