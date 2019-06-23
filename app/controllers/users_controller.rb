class UsersController < ApplicationController

  def show
    @cash = '%.2f' % current_user.cash
    render json: @cash
  end

  def update
    current_user.update(cash: params[:cash])
  end
end
