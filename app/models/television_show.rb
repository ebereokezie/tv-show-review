class TelevisionShow < ApplicationRecord
    validates :title, presence: true
    validates :season, presence: true
    validates :episode, presence: true, uniqueness: true
    validates :description, length: {maximum: 500}
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

    before_create :slugify
    def slugify
        self.slug = name.parameterize
    end

    def average_rating
        reviews.average(:rating).round(2).to_f
    end
end
