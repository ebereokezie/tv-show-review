class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :user_id, :user

  belongs_to :user
  belongs_to :television_show
end
