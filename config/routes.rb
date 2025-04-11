Rails.application.routes.draw do
  root "welcome#index"
  get "welcome/home", to: "welcome#home"
end
