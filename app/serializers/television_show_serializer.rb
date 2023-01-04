class TelevisionShowSerializer < ActiveModel::Serializer
  attributes :id

  has_many :reviews
  has_many :users, through: :reviews
end
