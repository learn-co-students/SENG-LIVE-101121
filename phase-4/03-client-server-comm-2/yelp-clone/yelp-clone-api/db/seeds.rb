bob = User.create(username: "bobiscool", email: "bobiscool@123.com")
sam = User.create(username: "samiam", email: "samiam@123.com")

starbucks = Business.create(name: "Starbucks", category: "cafe", city: "north pole", state: "california", zip_code: 100099)
mcdonalds = Business.create(name: "McDonalds", category: "fast-food", city: "south pole", state: "california", zip_code: 100099)
dennys = Business.create(name: "Dennys", category: "diner", city: "los angeles", state: "california", zip_code: 100099)


Review.create(content: "This is a review", business: mcdonalds, user: sam)

sam.reviews.create(content: "I need coffee!", business: starbucks)

dennys.reviews.create(content: "I want pancakes!!", user: bob)