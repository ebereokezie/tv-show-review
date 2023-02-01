class TelevisionShow < ApplicationRecord
    validates :title, presence: true
    validates :season, presence: true
    validates :episode, presence: true, uniqueness: true
    validates :description, length: {maximum: 500}
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

    before_create :slugify
    def slugify
        self.slug = title.parameterize
    end

    def average_rating
        if reviews.present?
        reviews.average(:rating).round(2).to_f
        else 
            return 0
        end
    end
end
