class RemoveTelevisionShowIdFromReviews < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :television_show_id, :integer
  end
end
