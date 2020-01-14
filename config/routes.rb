Rails.application.routes.draw do
 
  resources :experiences
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get '/test', to: 'application#test'

  # resources :locations
  # resources :experiences

  get '/locations', to: 'locations#index'
  post '/locations', to: 'locations#create'
  delete '/locations/:id', to: 'locations#destroy'


  # resources :experiences, only: [:index, :show, :update, :create, :destroy]
  # resources :locations, only: [:index, :show, :update, :create, :destroy]

end


