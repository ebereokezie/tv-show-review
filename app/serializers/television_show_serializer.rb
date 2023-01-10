class TelevisionShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :season, :episode, :description, :picture_url, :slug, :average_rating, :user_id

  has_many :reviews
  has_many :users, through: :reviews
end