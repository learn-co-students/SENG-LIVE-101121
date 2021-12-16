# Lecture 4: Serializers

### What is serialization?

"Serialization is the process of translating data structures or objects into a format that can be stored or transmitted and reconstructed later."
source: https://medium.com/@stvik2/serializing-data-in-rails-a46cb16e0c2d

### How have we been serializing up to this point?

- Using the render JSON and passing any options to the `to_json` method to customize data or include data associations.

### When to use AMS over controller serialization?

- More commonly, we want to include AMS when data structures become complex and require a lot of customization.
- Best practice for separation of concerns tells us we should always use AMS to isolate the responsibility of serialization from the controllers.

### How to use AMS

- Add gem to Gemfile:

```rb
gem 'active_model_serializers'
```

- To generate a new serializer, run serializer generator:

```rb
rails g serializer <serializer_name>
```

If convention is followed, serializers will match the respective model object.

```rb
...
render json: category
# this will invoke upon the CategorySerializer
```

To serialize a collection with a custom serializer, the `each_serializer` method can be used to pass each instance to the serializer

```rb
def index
  categories = Category.all
  render json: categories, each_serializer: CustomSerializer
end
```

## Serializing the Marketplace app data:

### Category

- Serialize with a `name`
- Serialize with a list of `items` including:

  - `name`, `desc`, `price` in 2 decimal format, with a dollar sign at the beginning i.e. `$10.50`
  - Define a method `#status` that will return 'sold' if self.sold returns true and 'Buy Now' if false.
  - Return the items `seller` with username and email included.

What does the expected data structure look like when we visit:

- `'/categories'`
- `'/categories/:id'`
- What associations will be included? What associative attributes should be included?
- Is there a defined serializer for the association? If not let's create one
- Does the serializer require more than one level deep association? If so, how should it be handled?

```json
{
  "name": "decor",
  "items": [
    {
      "id": 3,
      "name": "gold round mirror",
      "desc": "vintage mirror",
      "price": "$30.50",
      "status": "Buy Now"
    },
    {
      "id": 4,
      "name": "marble table lamp",
      "desc": "really cool marble lamp",
      "price": "$27.50",
      "status": "Buy Now"
    }
  ]
}
```

Create a serializer for category:

```rb
rails g serializer category
```

Add the following code to the serializer:

```rb
class CategorySerializer < ActiveModel::Serializer
  attributes :name
  has_many :items
end
```

In the controller, for serializing collections, add:

```rb
class CategoriesController < ApplicationController

    def index
        render json: Category.all, include: ['items.seller']
    end

    def show
        category = Category.find(params[:id])
        render json: category, include: ['items.seller']
    end
end
```

### Item

- Serialize with: `name`, `desc`, `price`
- `price` should be in a 2 decimal format, with a dollar sign at the beginning i.e. `$10.50`
- Define a method `#status` that will return 'sold' if self.sold returns true and 'buy now' if false
- Return the items `seller` with username and email included.
- Each item should also return a list of associated `categories` including the name

What does the expected data structure look like when we visit:

- `'/items'`
- `'/items/:id'`
- What associations will be included? What associative attributes should be included?
- Is there a defined serializer for the association? If not let's create one
- Does the serializer require more than one level deep association? If so, how should it be handled?

```json
{
  "id": 1,
  "name": "fishing pole",
  "desc": "really cool fishing pole!",
  "price": "$10.00",
  "status": "Buy Now",
  "seller": {
    "id": 1,
    "username": "aisayo",
    "email": "aisayo@123.com"
  },
  "categories": [
    {
      "name": "fishing"
    },
    {
      "name": "camping"
    }
  ]
}
```

Create a serializer for item:

```rb
rails g serializer item
```

Add the following code to the ItemSerializer:

```rb
class ItemSerializer < ActiveModel::Serializer
  attributes :name, :desc, :price, :status

  belongs_to :seller
  has_many :categories

  def price
    "$#{'%.2f' % self.object.price}"
  end

  def status
    if self.object.sold
      return "Sold"
    end
    return "Buy Now"
  end

end
```

```rb
class ItemsController < ApplicationController
    def index
      items = Item.where(sold: false)
      render json: items
    end

    def show
      item = Item.find
      render json: item
    rescue ActiveRecord::RecordNotFound => error
      render json: error.message, status: :not_found
    end
    ...
```

### User

Reminder that user can behave as either a seller and/or buyer. When a request to the users index or show is made, serialized data should return all items that have been purchased and/or sold.

- Serialize with `username` and `email`
- Return a list of both sold_items and purchased_items. These lists should be returned as separate collections.
- Return a list of the categories as `sold_categories` and `purchased_categories`, with only the category `name` included.

What does the expected data structure look like when we visit:

- `'/users'`
- `'/users/:id'`
- What associations will be included? What associative attributes should be included?
- Is there a defined serializer for the association? If not let's create one
- Does the serializer require more than one level deep association? If so, how should it be handled?

```json
{
  "username": "aisayo",
  "email": "aisayo@123.com",
  "sold_items": [
    {
      "name": "fishing pole",
      "desc": "really cool fishing pole!",
      "price": "$10.00",
      "status": "Buy Now"
    },
    {
      "name": "purple t",
      "desc": "get hip with this cool shirt",
      "price": "$5.00",
      "status": "Buy Now"
    },
    {
      "name": "test",
      "desc": "testing",
      "price": "$1.50",
      "status": "Buy Now"
    },
    {
      "name": "test",
      "desc": "testing",
      "price": "$1.50",
      "status": "Buy Now"
    },
    {
      "name": "test",
      "desc": "testing",
      "price": "$1.50",
      "status": "Buy Now"
    },
    {
      "name": "test",
      "desc": "testing",
      "price": "$1.50",
      "status": "Buy Now"
    }
  ],
  "purchased_items": [
    {
      "name": "gold round mirror",
      "desc": "vintage mirror",
      "price": "$30.50",
      "status": "Sold"
    }
  ],
  "sold_categories": [
    {
      "name": "fishing"
    },
    {
      "name": "camping"
    },
    {
      "name": "womens clothing"
    },
    {
      "name": "mens clothing"
    },
    {
      "name": "fishing"
    },
    {
      "name": "camping"
    },
    {
      "name": "electronics"
    },
    {
      "name": "fishing"
    },
    {
      "name": "camping"
    },
    {
      "name": "electronics"
    }
  ],
  "purchased_categories": [
    {
      "name": "decor"
    },
    {
      "name": "home"
    },
    {
      "name": "living room"
    }
  ]
}
```

Create a serailizer for user

```rb
rails g serializer user
```

Add the following to UserSerializer

```rb
class UserSerializer < ActiveModel::Serializer
  attributes :username, :email

  has_many :sold_items, serializer: ItemSerializer
  has_many :purchased_items, serializer: ItemSerializer
  has_many :sold_categories, serializer: CategorySerializer
  has_many :purchased_categories, serializer: CategorySerializer
end
```

Run `rails s` and navigate to `/users/1`

This will result in the following error:

```rb
undefined method `sold_categories' for #<User:0x00007faa26a81290>
```

This is because when it invokes upon the `sold_categories`, there is an expectation that the user model will also have a reader method `sold_categories`.

Let's fix this by adding the following to the user model:

```rb
  class User < ApplicationRecord
  ...
    has_many :sold_categories, :through => :sold_items
    has_many :purchased_categories, :through => :purchased_items
  end
```

Refresh the server. There will be a new error:

```rb
'ActiveRecord::HasManyThroughSourceAssociationNotFoundError in UsersController#show'
'Could not find the source association(s) "sold_category" or :sold_categories in model Item. Try 'has_many :sold_categories, :through => :sold_items, :source => <name>'. Is it one of seller, buyer, category_items, or categories?'
```

The error arises when the reader method is invoked because ActiveRecord looks for a `sold_categories` or `purchased_categories` table. To reroute to the `categories` table, add a `source:` method to the model association macros:

```rb
  class User < ApplicationRecord
  ...
    has_many :sold_categories, through: :sold_items, source: :categories
    has_many :purchased_categories, through: :purchased_items, source: :categories
  end
```

```rb
class UsersController < ApplicationController

class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, include: ['categories.items']
    end

    def show
        user = User.find(params[:id])
        render json: user
    end
    ...
```
