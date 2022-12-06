puts "🌱 Seeding spices..."

Daycare.create([
    {
        name: "Friendly Daycare",
        city: "Aurora",
        cost: 100
    },
    {
        name: "Giggles and Naps",
        city: "Denver",
        cost: 210
    },
    {
        name: "Downtown Daycare",
        city: "Denver",
        cost: 300
    },
    
   

])

Review.create([
    {
        rating: 2,
        comment: "Unsafe location",
        daycare_id: 37


    },
    {
        rating: 10,
        comment: "Friendly staff! Been taking my kid for 3 years!",
        daycare_id: 38

    },
    {
        rating: 10,
        comment: "Friendly staff!",
        daycare_id: 39

    }


])


puts "✅ Done seeding!"
