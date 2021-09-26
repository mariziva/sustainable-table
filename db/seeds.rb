# issues:
# -pluralization

# notes:
# -categories are there to help w substitutions or to provide a default exp date

Food.create(name: 'eggplant', quantity: 2, unit: 'eggplants', category: 'produce', days_until_expiration: 7, date_of_purchase: Date.today-3, user_id: 1)

Food.create(name: 'parsley', quantity: 2, unit: 'cups', category: 'produce', days_until_expiration: 7, date_of_purchase: Date.today-3, user_id: 1)

Food.create(name: 'ribeye steak', quantity: 4, unit: 'lbs', category: 'meat', days_until_expiration: 7, date_of_purchase: Date.today-1, user_id: 1)

Food.create(name: 'sour cream', quantity: 8, unit: 'cups', category: 'dairy', days_until_expiration: 14, date_of_purchase: Date.today-10, user_id: 1)

Food.create(name: 'egg', quantity: 12, unit: 'eggs', category: 'dairy', days_until_expiration: 14, date_of_purchase: Date.today-4, user_id: 1)

Food.create(name: 'chicken thigh', quantity: 10, unit: 'lbs', category: 'meat', days_until_expiration: 7, date_of_purchase: Date.today-5, user_id: 1)

Food.create(name: 'onion', quantity: 5, unit: 'onions', category: 'produce', days_until_expiration: 14, date_of_purchase: Date.today-1, user_id: 1)

Food.create(name: 'zucchini', quantity: 4, unit: 'zucchinis', category: 'produce', days_until_expiration: 5, date_of_purchase: Date.today-1, user_id: 1)

Food.create(name: 'salmon', quantity: 3, unit: 'lbs', category: 'meat', days_until_expiration: 1, date_of_purchase: Date.today-1, user_id: 1)

Food.create(name: 'lemon', quantity: 1, unit: 'lemons', category: 'produce', days_until_expiration: 10, date_of_purchase: Date.today-8, user_id: 1)

Food.create(name: 'mango', quantity: 3, unit: 'mangos', category: 'produce', days_until_expiration: 5, date_of_purchase: Date.today-2, user_id: 1)

Food.create(name: 'baguette', quantity: 3, unit: 'baguettes', category: 'bakery', days_until_expiration: 4, date_of_purchase: Date.today-1, user_id: 1)

Food.create(name: 'cookie', quantity: 30, unit: 'cookies', category: 'bakery', days_until_expiration: 3, date_of_purchase: Date.today-2, user_id: 1)


Recipe.create(name: 'chicken salad', description: 'chicken salad w veggies and a sour cream sauce served on a baguette', ingredients: 'baguette, sour cream, chicken, lemon, mayonnaise, dill')
Recipe.create(name: 'eggplant parmesan', description: 'eggplant parm w lemon', ingredients: 'eggplant, parsley, parmesan cheese, breadcrumbs')


User.create(name: 'mari', username: 'maritaksa', password: 'password')