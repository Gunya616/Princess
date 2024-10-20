document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const birthday = new Date(document.getElementById('birthday').value);

    // Правильные данные для пользователей
    const users = [
        { name: "Лиза", birthday: new Date("2006-05-23") }, // Первый пользователь
        { name: "1111", birthday: new Date("1111-11-11") }   // Новый пользователь
    ];

    // Находим пользователя по имени и дате рождения
    const user = users.find(user => user.name === name && user.birthday.toDateString() === birthday.toDateString());

    // Проверка имени и даты рождения
    if (user) {
        const kindWords = [
            Дорогая ${user.name}, ты — настоящая звезда, освещающая жизнь всех вокруг!,
            С днём рождения, ${user.name}! Твоя улыбка — это самое прекрасное, что может быть!,
            Ты — вдохновение для всех нас, и каждый день с тобой — это подарок!,
            ${user.name}, ты приносишь радость в каждую секунду своей жизни!,
            Ты уникальна, и я горжусь, что знаю тебя, ${user.name}!,
            Пусть каждый момент жизни дарит тебе счастье и улыбки, ${user.name}!
        ];

        const randomIndex = Math.floor(Math.random() * kindWords.length);
        const message = kindWords[randomIndex];

        // Создаем элемент для анимации
        const messageElement = document.createElement('div');
        messageElement.className = 'floating';
        messageElement.innerText = message;

        // Позиционируем элемент в верхней части экрана
        messageElement.style.left = Math.random() * 100 + 'vw'; // Случайная позиция по горизонтали
        messageElement.style.top = '0'; // Начинаем сверху
        document.body.appendChild(messageElement);

        // Удаляем элемент через 5 секунд
        setTimeout(() => {
            messageElement.remove();
        }, 5000);

    } else {
        alert("Ошибка: Введите правильное имя и дату рождения.");
    }
});
