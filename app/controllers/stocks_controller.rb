class StocksController < ApplicationController

  def index
    @stocks = Hash.new(0)
    current_user.trades.each do |t|
      if @stocks[Stock.find(t.stock_id)[:ticker_symbol]]
        @stocks[Stock.find(t.stock_id)[:ticker_symbol]] += 1
      else
        @stocks[Stock.find(t.stock_id)[:ticker_symbol]] = 1
      end
    end
    render json: @stocks
  end

  def create
    binding.pry
    @user = User.find(params[:current_user][:id])

    @stock = Stock.find_or_create_by(ticker_symbol: params[:ticker])

    @trade = Trade.create(user_id: @user.id, stock_id: @stock.id, transaction_price: params[:stockData][:current_price], qty: params[:qty])
    redirect_to root_url
  end
end
