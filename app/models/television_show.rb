class TelevisionShow < ApplicationRecord
    validates :title, presence: true
    validates :season, presence: true
    validates :episode, presence: true, uniqueness: true
    validates :description, length: {maximum: 500}
    has_many :reviews
    has_many :users, through: :reviews
end
