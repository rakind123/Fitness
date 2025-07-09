
function logWorkout() {
    const day = document.getElementById('workout-day').value;
    const exercise = document.getElementById('exercise').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;
    const weight = document.getElementById('weight').value;

    const log = `${day}: ${exercise} - ${sets} sets x ${reps} reps @ ${weight}kg`;
    const logDiv = document.getElementById('workout-log');
    const entry = document.createElement('div');
    entry.textContent = log;
    logDiv.appendChild(entry);

    localStorage.setItem('workout-' + Date.now(), log);
}

function logMeal() {
    const name = document.getElementById('meal-name').value;
    const calories = parseInt(document.getElementById('meal-calories').value);

    const log = `${name} - ${calories} kcal`;
    const logDiv = document.getElementById('meal-log');
    const entry = document.createElement('div');
    entry.textContent = log;
    logDiv.appendChild(entry);

    let total = parseInt(localStorage.getItem('totalCalories')) || 0;
    total += calories;
    localStorage.setItem('totalCalories', total);

    updateSummary();
}

function updateSummary() {
    const summaryDiv = document.getElementById('summary');
    const totalCalories = localStorage.getItem('totalCalories') || 0;
    summaryDiv.textContent = `Total Calories Consumed Today: ${totalCalories} kcal`;
}

window.onload = updateSummary;
