document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const birthday = new Date(document.getElementById('birthday').value);
    const correctBirthday = new Date("2006-05-23"); // Правильная дата рождения
    const correctName = "Лиза"; // Правильное имя

    // Проверка имени и даты рождения
    if (name === correctName && birthday.toDateString() === correctBirthday.toDateString()) {
        const kindWords = [
            Дорогая ${name}, ты — свет в жизни всех, кто тебя знает!,
            С днем рождения, ${name}! Ты делаешь мир лучше!,
            ${name}, ты невероятно талантлива и умна!,
            Ты — чудо, и я горжусь, что знаю тебя, ${name}!,
            ${name}, каждый твой день — это подарок!,
            Пусть каждый момент приносит тебе счастье, ${name}!
        ];

        const randomIndex = Math.floor(Math.random() * kindWords.length);
        
        document.getElementById('kindWords').innerText = ${kindWords[randomIndex]};
        document.getElementById('messages').classList.remove('hidden');
    } else {
        alert("Ошибка: Введите правильное имя и дату рождения.");
    }
});
