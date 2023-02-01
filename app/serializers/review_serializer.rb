class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :user_id, :user

  has_one :user
  has_one :television_show
end
