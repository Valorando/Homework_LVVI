function Sum(form)
{
    var from = parseInt(form.text1.value)
    var before = parseInt(form.text2.value)
    var sum = 0

    for(var i = from; i <= before; i++)
    {
        sum += i;
    }

    alert('Сумма чисел в диапазоне от ' + from + ' до ' + before + ' равна: ' + sum)
}

function Divider(form)
{
    var digit1 = parseInt(form.text1.value)
    var digit2 = parseInt(form.text2.value)
    var divider
    var remainder

    while(digit2 != 0)
    {
        remainder = digit1 % digit2
        digit1 = digit2
        digit2 = remainder
    }

    divider = digit1;

    alert('Наибольший общий делитель равен: ' + divider)
}

function AllDividers(form)
{
    var digit = parseInt(form.text1.value)
    const dividers = []

    for(var i = 1; i <= digit; i++)
    {
        if(digit % i === 0)
        {
            dividers.push(i)
        }
    }

    alert('Делители чиcла ' + digit + ': ' + dividers)

}

function CountDigits(form)
{
    var digit = parseInt(form.text1.value)
    var count = digit.toString().length
    
    alert('Число ' + digit + ' состоит из ' + count + ' цифр')
}

function Stat(form)
{
    var digits = form.text1.value
    var numbers = digits.split(',').map(Number)

    var positiveCount = 0
    var negativeCount = 0
    var zeroCount = 0
    var evenCount = 0
    var oddCount = 0

    numbers.forEach(function(number) {
        if (number > 0) {
          positiveCount++;
          if (number % 2 === 0) {
            evenCount++;
          } else {
            oddCount++;
          }
        } else if (number < 0) {
          negativeCount++;
        } else {
          zeroCount++;
        }
      });

      alert('Положительных чисел: ' + positiveCount + ' Отрицательных чисел: ' + negativeCount + ' Нулей: ' + zeroCount + ' Четных: ' + evenCount + ' Нечетных: ' + oddCount)
}

function Calculator(form)
{
    var digit1 = parseInt(form.text1.value)
    var digit2 = parseInt(form.text2.value)
    var action = form.action
    var result 

    if(action.options[action.selectedIndex].value == 'Добавить')
    {
        result = digit1 + digit2
        alert('Результат: ' + result)
    }

    if(action.options[action.selectedIndex].value == 'Вычесть')
    {
        result = digit1 - digit2
        alert('Результат: ' + result)
    }

    if(action.options[action.selectedIndex].value == 'Умножить')
    {
        result = digit1 * digit2
        alert('Результат: ' + result)
    }

    if(action.options[action.selectedIndex].value == 'Разделить')
    {
        result = digit1 / digit2
        alert('Результат: ' + result)
    }
}

function Table(form)
{
    var table = form.table

    if(table.options[table.selectedIndex].value == 'на 2')
    {
        alert('2 * 1 = 2\n2 * 2 = 4\n2 * 3 = 6\n2 * 4 = 8\n2 * 5 = 10\n 2 * 6 = 12\n2 * 7 = 14\n2 * 8 = 16\n2 * 9 = 18\n2 * 10 = 20')
    }

    if(table.options[table.selectedIndex].value == 'на 3')
    {
        alert('3 * 1 = 3\n3 * 2 = 6\n3 * 3 = 9\n3 * 4 = 12\n3 * 5 = 15\n3 * 6 = 18\n3 * 7 = 21\n3 * 8 = 24\n3 * 9 = 27\n3 * 10 = 30')
    }

    if(table.options[table.selectedIndex].value == 'на 4')
    {
        alert('4 * 1 = 4\n4 * 2 = 8\n4 * 3 = 12\n4 * 4 = 16\n4 * 5 = 20\n4 * 6 = 24\n4 * 7 = 28\n4 * 8 = 32\n4 * 9 = 36\n4 * 10 = 40')
    }

    if(table.options[table.selectedIndex].value == 'на 5')
    {
        alert('5 * 1 = 5\n5 * 2 = 10\n5 * 3 = 15\n5 * 4 = 20\n5 * 5 = 25\n5 * 6 = 30\n5 * 7 = 35\n5 * 8 = 40\n5 * 9 = 45\n5 * 10 = 50')
    }

    if(table.options[table.selectedIndex].value == 'на 6')
    {
        alert('6 * 1 = 6\n6 * 2 = 12\n6 * 3 = 18\n6 * 4 = 24\n6 * 5 = 30\n6 * 6 = 36\n6 * 7 = 42\n6 * 8 = 48\n6 * 9 = 54\n6 * 10 = 60')
    }

    if(table.options[table.selectedIndex].value == 'на 7')
    {
        alert('7 * 1 = 7\n2 * 2 = 14\n7 * 3 = 21\n7 * 4 = 28\n7 * 5 = 35\n7 * 6 = 42\n7 * 7 = 49\n7 * 8 = 56\n7 * 9 = 63\n7 * 10 = 70')
    }

    if(table.options[table.selectedIndex].value == 'на 8')
    {
        alert('8 * 1 = 2\n8 * 2 = 16\n8 * 3 = 24\n8 * 4 = 32\n8 * 5 = 40\n8 * 6 = 48\n8 * 7 = 56\n8 * 8 = 64\n8 * 9 = 72\n8 * 10 = 80')
    }

    if(table.options[table.selectedIndex].value == 'на 9')
    {
        alert('9 * 1 = 9\n9* 2 = 18\n9 * 3 = 27\n9 * 4 = 36\n9 * 5 = 45\n9 * 6 = 54\n9 * 7 = 63\n9 * 8 = 72\n9 * 9 = 81\n9 * 10 = 90')
    }
}

function Next(form)
{
    var week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
    var current = form.text1.value
    var index = week.indexOf(current)
    var next_index = (index + 1) % week.length
    var next_day = week[next_index]
    form.text1.value = next_day
}

function Shift(form)
{
    var digit = form.text1.value
    var shift = form.text2.value
    var result

    var index = shift % digit.length
    result = digit.slice(index) + digit.slice(0, index)
    alert('Результат: ' + result)
}

function Game()
{
    var answer
    var low = 0
    var middle = 0
    var high = 100

    alert('Правила игры:\n*Вы загадываете целое число от 0 до 100\n*Я попытаюсь его отгадать, для этого буду отображать возможные варианты ответа\n*Если ваше число меньше моего - введите знак <\n*Если ваше число больше моего - введите знак >\n*Если ваше число совпадет с моим - введите знак =')

    alert('Игра началась!')

    while(low <= high)
    {
        middle = Math.trunc((low + high) / 2)
        answer = prompt('Я думаю что это число: ' + middle + ' Ваш ответ:')

        if (answer != "=" && answer != "<" && answer != ">")
        {
            alert('Введённое вам значение - некорректное')
            continue;
        }
        if (answer == ">")
        {
            low = middle + 1;
        }
        else if (answer == "<")
        {
            high = middle - 1;
        }
        else
        {
            low = high + 1;
        }
    }

    alert('Вы загадали число ' + middle + ' ,игра окончена!');
}
