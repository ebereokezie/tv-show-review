class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  has_many :reviews
  has_many :television_shows, through: :reviews
end
