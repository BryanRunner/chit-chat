Rails.application.routes.draw do

  # Serve websocket cable requests in-process
  mount ActionCable.server => '/cable'

  authenticated :user do
    root 'users#show', as: :authenticated_root
  end

  root 'main#index'

  devise_for :users, controllers: {
    sessions: 'devise/users/sessions',
    confirmations: 'devise/users/confirmations',
    passwords: 'devise/users/passwords',
    registrations: 'devise/users/registrations',
    unlocks: 'devise/users/unlocks'
  }

  resources :users, only: [:show] do
    resources :chats
  end

  resources :chats, only: [:show]
  resources :messages

end
