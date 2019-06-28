class StocksController < ApplicationController

  def index
    @stocks_hash = Hash.new(0)
    current_user.trades.each do |t|
      if @stocks_hash[Stock.find(t.stock_id)[:ticker_symbol]]
        @stocks_hash[Stock.find(t.stock_id)[:ticker_symbol]] += t.qty
      else
        @stocks_hash[Stock.find(t.stock_id)[:ticker_symbol]] = t.qty
      end
    end

    @stocks_array = Array.new
    @stocks_hash. each do |key, value|
      @stocks_array.push([key, value])
    end

    render json: @stocks_array
  end


end
