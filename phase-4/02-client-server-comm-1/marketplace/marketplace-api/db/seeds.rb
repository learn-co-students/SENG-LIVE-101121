# Creating users:
aisayo = User.create(username: "aisayo", email: "aisayo@123.com")
bob_is_cool = User.create(username: 'bobiscool', email: 'bobiscool@123.com')

# Creating categories:
fishing = Category.create(name: "fishing")
camping = Category.create(name: "camping")
womens_clothing = Category.create(name: "womens clothing")
mens_clothing = Category.create(name: "mens clothing")
electronics = Category.create(name: "electronics")
decor = Category.create(name: "decor")
home = Category.create(name: "home")
living_room = Category.create(name: "living room")

# Creating items
fishing_pole = Item.create(name: "fishing pole", desc: "really cool fishing pole!", price: 10.00, seller: aisayo)
white_t = Item.create(name: "white t", desc: "get hip with this cool shirt", price: 5.00, seller: aisayo)
round_mirror = Item.create(name: "gold round mirror", desc: "vintage mirror", price: 30.50, seller: bob_is_cool)
table_lamp = Item.create(name: "marble table lamp", desc: "really cool marble lamp", price: 27.50, seller: bob_is_cool)
walkman = Item.create(name: "vintage walkman", desc: "go back in time with this music player", price: 5.25, seller: bob_is_cool)

# Creating category_items
CategoryItem.create(item: fishing_pole, category: fishing)
CategoryItem.create(item: fishing_pole, category: camping)
CategoryItem.create(item: white_t, category: womens_clothing)
CategoryItem.create(item: white_t, category: mens_clothing)
CategoryItem.create(item: round_mirror, category: decor)
CategoryItem.create(item: round_mirror, category: home)
CategoryItem.create(item: round_mirror, category: living_room)
CategoryItem.create(item: table_lamp, category: decor)
CategoryItem.create(item: table_lamp, category: living_room)
CategoryItem.create(item: table_lamp, category: home)
CategoryItem.create(item: walkman, category: electronics)