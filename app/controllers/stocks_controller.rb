class StocksController < ApplicationController

  def index
    @stocks = current_user.stocks.uniq { |stock| stock.ticker_symbol }
    render json: @stocks
  end

  def create
    @user = User.find(params[:current_user][:id])

    if Stock.find_by(ticker_symbol: params[:ticker])
      @stock = Stock.find_by(ticker_symbol: params[:ticker])
      @stock.qty += params[:qty].to_i
      @stock.save

    else
      @stock = Stock.create(ticker_symbol: params[:ticker], qty: params[:qty].to_i)

    end

    @trade = Trade.create(user_id: @user.id, stock_id: @stock.id, transaction_price: params[:stockData][:current_price], qty: params[:qty])
  end
end
