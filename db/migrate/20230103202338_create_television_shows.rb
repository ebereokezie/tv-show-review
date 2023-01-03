class CreateTelevisionShows < ActiveRecord::Migration[6.1]
  def change
    create_table :television_shows do |t|
      t.string :title
      t.integer :season
      t.integer :episode
      t.string :description
      t.string :picture_url

      t.timestamps
    end
  end
end
