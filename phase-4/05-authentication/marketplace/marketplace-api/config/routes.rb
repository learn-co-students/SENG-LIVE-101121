Rails.application.routes.draw do
  resources :items
  resources :users, only: [:create, :destroy, :index]
  resources :categories, only: [:index, :show]
  patch '/items/:id/sold', to: "items#sold"
  get '/purchased_items', to: 'items#purchased_items'
end

