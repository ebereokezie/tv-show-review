Rails.application.routes.draw do
  
  resources :television_shows
  resources :reviews, only: [:create, :destroy]

end
