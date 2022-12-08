require 'pry';

class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  

  get '/daycares' do 
    daycares = Daycare.all
    daycares.to_json(include: :reviews)
  end


  delete '/daycares/:id' do
    daycare = Daycare.find(params[:id])
    daycare.destroy
    daycare.to_json(inlude: :reviews)
  end

  get '/daycares/:id' do
    daycare = Daycare.find(params[:id])
    daycare.to_json(include: :reviews)
  end


  post '/daycares' do
    daycare = Daycare.create(
      name: params[:name],
      city: params[:city],
      cost: params[:cost]
    )
    daycare.to_json(include: :reviews)
  end

  # patch '/daycares/:id' do
  #   daycare = Daycare.find(params[:id])
  #   daycare.update(
  #     comment: params[:comment]
  #   )
  #   daycare.to_json(include: :reviews)
  # end

  
  patch '/daycares/:id' do
    daycare = Daycare.find(params[:id])
    daycare.update(
      name: params[:name],
      city: params[:city],
      cost: params[:cost]
    )
    daycare.to_json(include: :reviews)
  end
  




end
