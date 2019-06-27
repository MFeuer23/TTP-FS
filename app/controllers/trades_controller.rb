class TradesController < ApplicationController

  def index
    render json: current_user.trades
  end

  def create
    @stock = Stock.find_or_create_by(ticker_symbol: params[:ticker])

    if current_user.cash >= (params[:stockData][:current_price] * params[:qty].to_i)
      @trade = Trade.create(user_id: current_user.id, stock_id: @stock.id, transaction_price: params[:stockData][:current_price], qty: params[:qty], ticker: params[:ticker])
    end
  end

end
