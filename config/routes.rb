Rails.application.routes.draw do
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  

  # resources :locations
  # resources :experiences

  get '/locations', to: 'locations#index'
  post '/locations', to: 'locations#create'
  delete '/locations/:id', to: 'locations#destroy'

  get '/experiences', to: 'locations#experiences'
  post '/experiences', to: 'experiences#create'
  delete '/experiences/:id', to: 'experiences#destroy'


  # resources :experiences, only: [:index, :create, :destroy]
  # resources :locations, only: [:index, :create, :destroy]

end


