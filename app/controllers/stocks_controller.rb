class Api::V1::UsersController < ApplicationController

  def index
    url = "https://api.iextrading.com/1.0/stock/#{params[:stock]}/quote"
    binding.pry
    begin
    response = RestClient::Request.execute(
      method: :get,
      url: "#{url}",
    )

    rescue RestClient::ExceptionWithResponse => e
    puts e.response
    end
    render json: response
  end

end
