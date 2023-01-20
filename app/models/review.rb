class Review < ApplicationRecord
    validates :rating, numericality: {less_than_or_equal_to: 5}
    validates :comment, length: {maximum: 500}
    belongs_to :user
    belongs_to :television_show
end
