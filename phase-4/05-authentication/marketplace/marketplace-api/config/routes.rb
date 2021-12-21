Rails.application.routes.draw do
  resources :items
  resources :users, only: [:destroy, :index]
  resources :categories, only: [:index, :show]
  patch '/items/:id/sold', to: "items#sold"
  get '/purchased_items', to: 'items#purchased_items'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#me'
  post "/login", to: "sessions#create"
  delete '/logout', to: 'sessions#destroy'
end
