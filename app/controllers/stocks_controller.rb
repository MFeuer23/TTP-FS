class StocksController < ApplicationController

  def index
    @stocks = Hash.new(0)
    current_user.trades.each do |t|
      if @stocks[Stock.find(t.stock_id)[:ticker_symbol]]
        @stocks[Stock.find(t.stock_id)[:ticker_symbol]] += t.qty
      else
        @stocks[Stock.find(t.stock_id)[:ticker_symbol]] = t.qty
      end
    end
    render json: @stocks
  end


end
