Rails.application.routes.draw do
  # resources :category_items
  # resources :categories
  resources :items, only: [:index, :show, :create]
  # resources :users

  # get '/items', to: 'items#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # POST '/items', to: "items#create"
end

