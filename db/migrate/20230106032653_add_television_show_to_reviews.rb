class AddTelevisionShowToReviews < ActiveRecord::Migration[6.1]
  def change
    add_reference :reviews, :television_show, null: false, foreign_key: true
  end
end
