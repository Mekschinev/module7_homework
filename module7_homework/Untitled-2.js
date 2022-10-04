// Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const student = {
    имя: "Александр", 
    город: "Орёл",
    возраст: 34,
    специальность: "Разработчик"
  };


  console.log(showProps(student, "город"));