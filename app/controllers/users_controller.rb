class UsersController < ApplicationController

  def show
    render json: current_user.cash
  end

  def update
    current_user.update(cash: params[:cash])
  end
end
