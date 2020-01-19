Rails.application.routes.draw do
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html


  # resources :locations, only: [:index, :create, :destroy]
  get '/locations', to: 'locations#index'
  post '/locations', to: 'locations#create'
  delete '/locations/:id', to: 'locations#destroy'

  # resources :experiences, only: [:index, :create, :destroy]
  get '/experiences', to: 'experiences#index'
  post '/experiences', to: 'experiences#create'
  delete '/experiences/:id', to: 'experiences#destroy'


end


