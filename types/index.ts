export interface BettingSite {
  id: number
  name: string
  logo: string
  rating: number
  bonus: string
  description: string
  features: string[]
  welcomeOffer: string
  terms: string
  userRating: number
  votes: number
  link: string
}

export interface Banner {
  id: number
  title: string
  subtitle: string
  image: string
  link: string
}
