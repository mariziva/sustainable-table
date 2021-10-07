# issues:
# -pluralization

# notes:
# -categories are there to help w substitutions or to provide a default exp date

Food.create(name: 'eggplant', quantity: 2, unit: 'eggplants', category: 'produce', days_until_expiration: 7, date_of_purchase: Date.today-3, image_url: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/eggplant_1f346.png", user_id: 1)

Food.create(name: 'potato', quantity: 20, unit: 'potatoes', category: 'produce', days_until_expiration: 10, date_of_purchase: Date.today-3, image_url: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/potato_1f954.png", user_id: 1)

Food.create(name: 'basil', quantity: 2, unit: 'cups', category: 'produce', days_until_expiration: 7, date_of_purchase: Date.today-3, image_url: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/seedling_1f331.png", user_id: 1)

Food.create(name: 'ribeye steak', quantity: 4, unit: 'lbs', category: 'meat', days_until_expiration: 7, date_of_purchase: Date.today-1, image_url: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/cut-of-meat_1f969.png", user_id: 1)

Food.create(name: 'cheddar cheese', quantity: 8, unit: 'cups', category: 'dairy', days_until_expiration: 14, date_of_purchase: Date.today-10, image_url: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/cheese-wedge_1f9c0.png", user_id: 1)

Food.create(name: 'egg', quantity: 12, unit: 'eggs', category: 'dairy', days_until_expiration: 14, date_of_purchase: Date.today-4, image_url: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/egg_1f95a.png", user_id: 1)

Food.create(name: 'chicken thigh', quantity: 10, unit: 'lbs', category: 'meat', days_until_expiration: 7, date_of_purchase: Date.today-5, image_url: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/poultry-leg_1f357.png", user_id: 1)

Food.create(name: 'onion', quantity: 5, unit: 'onions', category: 'produce', days_until_expiration: 14, date_of_purchase: Date.today-1, image_url: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/onion_1f9c5.png", user_id: 1)

Food.create(name: 'zucchini', quantity: 4, unit: 'zucchinis', category: 'produce', days_until_expiration: 5, date_of_purchase: Date.today-1, image_url: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/291/cucumber_1f952.png", user_id: 1)

Food.create(name: 'salmon', quantity: 3, unit: 'lbs', category: 'meat', days_until_expiration: 1, date_of_purchase: Date.today-1, image_url: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/fish_1f41f.png", user_id: 1)

Food.create(name: 'lemon', quantity: 1, unit: 'lemons', category: 'produce', days_until_expiration: 10, date_of_purchase: Date.today-8, image_url: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/lemon_1f34b.png", user_id: 1)

Food.create(name: 'mango', quantity: 3, unit: 'mangos', category: 'produce', days_until_expiration: 5, date_of_purchase: Date.today-2, image_url: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/mango_1f96d.png", user_id: 1)

Food.create(name: 'baguette', quantity: 3, unit: 'baguettes', category: 'bakery', days_until_expiration: 4, date_of_purchase: Date.today-1, image_url: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/baguette-bread_1f956.png", user_id: 1)

Food.create(name: 'bell pepper', quantity: 3, unit: 'peppers', category: 'produce', days_until_expiration: 3, date_of_purchase: Date.today-2, image_url: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/285/bell-pepper_1fad1.png", user_id: 1)


# Recipe.create(name: 'chicken salad', description: 'chicken salad w veggies and a sour cream sauce served on a baguette', ingredients: 'baguette, sour cream, chicken, lemon, mayonnaise, dill', user_id: 1)
# Recipe.create(name: 'eggplant parmesan', description: 'eggplant parm w lemon', ingredients: 'eggplant, parsley, parmesan cheese, breadcrumbs', user_id: 1)


User.create(name: 'mari', username: 'maritaksa', password: 'password')