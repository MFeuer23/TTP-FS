class TradesController < ApplicationController

  def index
    render json: current_user.trades
  end

  def create
    
    @user = User.find(params[:current_user][:id])
    @stock = Stock.find_or_create_by(ticker_symbol: params[:ticker])
    @trade = Trade.create(user_id: @user.id, stock_id: @stock.id, transaction_price: params[:stockData][:current_price], qty: params[:qty], ticker: @stock.ticker_symbol)
  end
end