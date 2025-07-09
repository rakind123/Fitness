const exerciseData = {
  chest: ['Flat Bench Press', 'Incline Dumbbell Press', 'Cable Flys'],
  back: ['Lat Pulldown', 'Deadlift', 'Seated Row'],
  shoulders: ['Overhead Press', 'Lateral Raises', 'Rear Delt Fly'],
  legs: ['Back Squat', 'Leg Press', 'Romanian Deadlift'],
  core: ['Plank', 'Leg Raise', 'Russian Twist']
};

const mealPlans = [
  'Meal 1: Whey Protein Isolate',
  'Meal 2: Oats + Pineapple (145g) + Blueberries',
  'Meal 3: Grilled Chicken Thighs (200g) + Sweet Potato',
  'Meal 4: Yoplait Source Yogurt + Banana',
  'Optional: 1 tbsp Moringa Powder in Water'
];

const mealRecipes = [
  'Grilled Chicken Marinade: 3 tbsp dahi, 1 tbsp ginger garlic paste, 2 tsp cayenne, 2 tsp salt, 2 tsp coriander+cumin powder, 1.5 tsp garam masala, 2 tsp kasuri methi, 2.5 tbsp besan, 2 eggs',
  'Oats Bowl: 40g oats, 145g pineapple, 30g blueberries',
  'Sweet Potato (air fried/boiled) with herbs'
];

function showSection(sectionId) {
  document.querySelectorAll('main > section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(sectionId).classList.remove('hidden');
}

function loadExercise(group) {
  const container = document.getElementById('exercise-content');
  container.innerHTML = '<ul>' + exerciseData[group].map(item => `<li>${item}</li>`).join('') + '</ul>';
}

function loadMealPlan() {
  const container = document.getElementById('meal-content');
  container.innerHTML = '<ul>' + mealPlans.map(item => `<li>${item}</li>`).join('') + '</ul>';
}

function loadMealRecipes() {
  const container = document.getElementById('meal-content');
  container.innerHTML = '<ul>' + mealRecipes.map(item => `<li>${item}</li>`).join('') + '</ul>';
}

function logWorkout() {
  const sets = parseInt(document.getElementById('sets').value) || 0;
  const reps = parseInt(document.getElementById('reps').value) || 0;
  const weight = parseFloat(document.getElementById('weight').value) || 0;
  const caloriesBurned = Math.round((sets * reps * weight * 0.1));
  totalCalories -= caloriesBurned;
  updateSummary();
}

let totalCalories = 0;

function logMeal() {
  const cals = parseInt(document.getElementById('calories').value) || 0;
  totalCalories += cals;
  updateSummary();
}

function updateSummary() {
  document.getElementById('totalCalories').innerText = totalCalories;
}
