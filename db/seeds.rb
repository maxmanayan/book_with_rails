# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require "faker"

Book.destroy_all


10.times do
  Book.create(
    title: Faker::DcComics.title,
    author: Faker::DcComics.name,
  )
end


puts "Seeded #{Book.all.size} new books"