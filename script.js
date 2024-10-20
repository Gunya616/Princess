document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const birthday = new Date(document.getElementById('birthday').value);
    const correctBirthday = new Date("2006-05-23"); // Правильная дата рождения
    const correctName = "Лиза"; // Правильное имя

    // Проверка имени и даты рождения
    if (name === correctName && birthday.toDateString() === correctBirthday.toDateString()) {
        const kindWords = [
            Дорогая ${name}, ты — настоящая звезда, освещающая жизнь всех вокруг!,
            С днём рождения, ${name}! Твоя улыбка — это самое прекрасное, что может быть!,
            Ты — вдохновение для всех нас, и каждый день с тобой — это подарок!,
            ${name}, ты приносишь радость в каждую секунду своей жизни!,
            Ты уникальна, и я горжусь, что знаю тебя, ${name}!,
            Пусть каждый момент жизни дарит тебе счастье и улыбки, ${name}!
        ];

        const randomIndex = Math.floor(Math.random() * kindWords.length);
        const message = kindWords[randomIndex];

        // Создаем элемент для анимации
        const messageElement = document.createElement('div');
        messageElement.className = 'floating';
        messageElement.innerText = message;

        // Позиционируем элемент случайным образом по горизонтали
        messageElement.style.left = Math.random() * 100 + 'vw'; // 100% ширины окна
        document.body.appendChild(messageElement);

        // Удаляем элемент через 5 секунд
        setTimeout(() => {
            messageElement.remove();
        }, 5000);

    } else {
        alert("Ошибка: Введите правильное имя и дату рождения.");
    }
});
