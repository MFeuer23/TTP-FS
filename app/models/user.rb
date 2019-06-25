class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable, :recoverable
  devise :database_authenticatable, :registerable, :rememberable, :validatable

  has_many :trades
  has_many :stocks, through: :trades

  validates :name, presence: true
  validates :email, uniqueness: true
end
