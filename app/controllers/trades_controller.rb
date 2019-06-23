class TradesController < ApplicationController

  def index
    render json: current_user.trades
  end

end
