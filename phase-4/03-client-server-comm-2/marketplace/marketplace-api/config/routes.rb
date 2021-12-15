Rails.application.routes.draw do
  # resources :category_items
  # resources :categories
  resources :items
  resources :users, only: [:create, :destroy]


  patch '/items/:id/sold', to: "items#sold"

  # get '/purchased_items', to: "items#purchased_items"
  get 'users/:user_id/purchased_items', to: 'items#purchased_items'

  # get '/items', to: 'items#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # POST '/items', to: "items#create"
end

