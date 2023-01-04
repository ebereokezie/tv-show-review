class TelevisionShowSerializer < ActiveModel::Serializer
  attributes :id, :title, :season, :episode, :description, :slug, :user_id

  has_many :reviews
  has_many :users, through: :reviews
end