# Welcome to phase 4!

### Phase Objectives

- Create RESTful APIs
- Validate data
- Share data between a frontend JavaScript application and a backend API application
- Build authentication into APIs
- Deploy backend applications

### What is Rails?

- A web application framework: provides the foundational base for every application, removing configuration and setup repetition. Allowing developers to focus on the integral portions of building the application.
- Do more with less code.
- Written in Ruby programming language
- A gem: needs to be installed in order to have accessibility to Rails tools.
- Implements the MVC framework to help clarify code separation and organization
- 2 major principles to follow:
  - Convention over configuration: Rails is opinionated. This can help Free up a developers dedication to making decisions about folder structure, file and variable namings, routing.
  - DRY: Don't Repeat Yourself: Makes code more maintainable and less buggy

### Sinatra vs Rails

<p align="center">
    <img src="../public/sinatravsrails.png" width="450" height="300">
</p>

# App Design:

### Marketplace

We will be building a Marketplace application that will allow a user to list a categorized item for sale. We will keep track of the items a user has sold, as well as items users have purchased. Items can be filtered by categories. The categories items belong to will also be listed on the item's post.

### Domain Model

<p align="center">
    <img src="../public/domainmodel.png" width="750" height="500">
</p>

#### User

A user can be a seller or buyer

- attributes:
  - email:string, username:string
- associations:
  - Seller has many items as sold_items
  - Buyer has many items as purchased_items

#### Item

- attributes:
  - name:string, price:float, desc:text, sold:boolean
  <details>
  <summary>What attributes are missing and why?</summary>
      seller_id, buyer_id
  </details>
- associations:
  - has many category_items
  - has many categories, through category_items
  - belongs to a user as seller
  - belongs to a user as buyer

#### Category

- attributes:
  - name:string
- associations:
  - has many category_items
  - has many items, through category_items

#### CategoryItem

- attributes:
  <details>
  <summary>What attributes will this model need?</summary>
      category_id, item_id
  </details>
- associations:
  - belongs to a category
  - belongs to an item

### Lecture Deliverables:

1. [ ] [Create a Rails application named 'marketplace-api'](#pt1)
2. [ ] [Configure CORS](#pt2)
3. [ ] [Use Rails to generate models: User, Item, Category, CategoryItem](#pt3)
4. [ ] [Create migrations for the following tables: users, items, categories, category_items](#pt4)
5. [ ] [Add associations to models](#pt5)
6. [ ] [Create some seed data in the `db/seeds.rb`](#pt6)
7. [ ] [Define an index action for each resource](#pt7)
8. [ ] [Define a show action for each resource](#pt8)

### Create a Rails application named 'marketplace-api'

<div id='pt1'></div>

- Run the following command:

```rb
rails new marketplace-api --api --minimal --skip-javascript -T
```

- `cd` into `marketplace-api`

### Configure CORS<a name="pt2"></a>

<div id='pt2'></div>

- Navigate to `config/initializers/cors.rb` and comment out lines 8-16
- Change `origins` to `'*'`

```rb
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins '*'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

- In gemfile, comment back in `gem 'rack-cors'` and run `bundle update`

### Use Rails to generate models: User, Item, Category, CategoryItem

<div id='pt3'></div>

### Rails Generators: [Cheatsheet](https://shannoncrabill.com/blog/ruby-on-rails-singular-or-plural-generator-cheat-sheet/)

<details>
  <summary>rails g controller </summary>
    <ul> 
        <li> Creates controller in app/controllers</li>
        <li> Creates a route in config/routes if actions are provided as arguments <strong>NOTE:</strong> these routes are not useful, will not follow REST convention </li>
    </ul>
</details>

<details>
  <summary>rails g model</summary>
    <ul> 
        <li>Creates a model file in app/models</li>
        <li> Creates a migration file in db/migrate, will include columns and types if provided as argument</li>
    <ul>
</details>

<details>
  <summary>rails g migration</summary>
    <ul> 
        <li> Creates a migration file in db/migrate</li>
        <li> Will include columns and types if provided as argument</li>
    </ul>
</details>
  
<details>
  <summary>rails g resource</summary>
    <ul>
        <li> Creates a migration file in db/migrate</li>
        <li> Creates a model file in app/models</li>
        <li> Creates controller in app/controllers</li>
        <li> Creates a route in config/routes if actions are provided as arguments <strong>NOTE:</strong> these routes are not useful, will not follow REST convention</li>
    </ul>
</details>
    
### We will use the resource generator to create 
```rb
rails g resource user username email
```

```rb
rails g resource item name desc:text price:float sold:boolean seller:references buyer:references
```

```rb
rails g resource category name
```

```rb
rails g resource category_item category:belongs_to item:belongs_to
```

### Create migrations for the following tables: users, items, categories, category_items

<div id='pt3'></div>

```rb
class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.timestamps
    end
  end
end
```

```rb
class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.text :desc
      t.float :price
      t.boolean :sold, default: false
      t.references :seller, foreign_key: { to_table: 'users' }
      t.references :buyer, foreign_key: { to_table: 'users' }
      t.timestamps
    end
  end
end
```

```rb
class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :categories do |t|
      t.string :name

      t.timestamps
    end
  end
end
```

```rb
class CreateCategoryItems < ActiveRecord::Migration[6.1]
  def change
    create_table :category_items do |t|
      t.belongs_to :category, null: false, foreign_key: true
      t.belongs_to :item, null: false, foreign_key: true
      t.timestamps
    end
  end
end
```

### Add associations to models

<div id='pt5'></div>

```rb
class CategoryItem < ApplicationRecord
  belongs_to :category
  belongs_to :item
end
```

```rb
class Category < ApplicationRecord
    has_many :category_items
    has_many :items, through: :category_items
end
```

```rb
class Item < ApplicationRecord
  belongs_to :seller, class_name: "User", foreign_key: "seller_id"
  belongs_to :buyer, class_name: "User", foreign_key: "buyer_id", optional: true
  has_many :category_items
  has_many :categories, through: :category_items
end
```

```rb
class User < ApplicationRecord
    has_many :purchased_items, class_name: 'Item', foreign_key: 'buyer_id'
    has_many :sold_items, class_name: 'Item', foreign_key: 'seller_id'
end

```

### Create some seed data in the `db/seeds.rb`

<div id='pt6'></div>

```rb
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
```

### Define an index action for each resource

<div id='pt7'></div>

Index action: retrieve all instances of resource. i.e. `Item.all`

1. Need to define an endpoint `'/items'` in `config/routes.rb`. This can be done in 2 ways

```rb
get '/items', to: 'items#index'
```

or

```rb
resources :items, only: [:index]
```

2. Inside controller, define a method `index` that will return all records serialized in JSON format:

```rb
class ItemsController < ApplicationController

    def index
        items = Item.all
        render json: items
    end

end
```

### Define an show action for each resource

<div id='pt8'></div>

1. Need to define an endpoint `'/items/:id'` in `config/routes.rb`. This can be done in 2 ways

```rb
get '/items/:id', to: 'items#show'
```

or

```rb
resources :items, only: [:index, :show]
```

```rb
class ItemsController < ApplicationController

    def index
        items = Item.all
        render json: items
    end

    def show
        item = Item.find_by_id(params[:id])
        if item 
          render json: item
        else 
          render json: { error: "Item not found" }, status: :not_found
        end 
    end
end
```
