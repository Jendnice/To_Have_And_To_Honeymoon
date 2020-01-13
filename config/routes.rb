Rails.application.routes.draw do
 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get '/test', to: 'application#test'

  # resources :locations

  get '/locations', to: 'locations#index'

  post '/locations', to: 'locations#create'

  # resources :locations, only: [:index, :show, :update, :create, :destroy]

end


