Rails.application.routes.draw do
  post '/signup', to: "users#create"
  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  resources :television_shows
  resources :reviews, only: [:create, :destroy]

end
