class Review < ApplicationRecord
    validates :rating, presence: true
    validates :comment, length: {maximum: 500}
    belongs_to :user
    belongs_to :television_show
end
