document.getElementById('birthdayForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const birthday = new Date(document.getElementById('birthday').value);
    
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthday.getFullYear();
    
    const kindWords = [
        Дорогая ${name}, ты — свет в жизни всех, кто тебя знает!,
        С днем рождения, ${name}! Ты делаешь мир лучше!,
        ${name}, ты невероятно талантлива и умна!,
        Ты — чудо, и я горжусь, что знаю тебя, ${name}!,
        ${name}, каждый твой день — это подарок!,
        Пусть каждый момент приносит тебе счастье, ${name}!
    ];

    const randomIndex = Math.floor(Math.random() * kindWords.length);
    
    document.getElementById('kindWords').innerText = ${kindWords[randomIndex]} Тебе уже ${age} лет!;
    document.getElementById('messages').classList.remove('hidden');
});
