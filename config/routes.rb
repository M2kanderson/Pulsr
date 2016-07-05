Rails.application.routes.draw do
 root to:"static_pages#root"
 namespace :api, defaults: { format: :json } do
   resource :session, only:[:create, :destroy]
   resources :users, only:[:create]
   resources :photos, only:[:index, :show, :create, :update, :destroy]
   resources :albums, only:[:index, :show, :create, :update, :destroy]
   resources :comments, only:[:index, :show, :create, :update, :destroy]
   resources :tags
 end
end
