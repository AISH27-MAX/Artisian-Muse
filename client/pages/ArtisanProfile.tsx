import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  MapPin,
  Calendar,
  Award,
  Heart,
  Share2,
  Grid3X3,
  List,
  Filter,
  ArrowLeft,
  Mail,
  MessageCircle,
  ShoppingBag,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock artisan data - in real app, this would come from API
const mockArtisanData = {
  id: "emma-chen",
  name: "Emma Chen",
  avatar: "/placeholder.svg",
  coverImage: "/placeholder.svg",
  location: "Portland, OR",
  memberSince: "2019",
  specialties: ["Hand-weaving", "Natural Dyeing", "Textile Design"],
  rating: 4.9,
  totalReviews: 127,
  totalProducts: 24,
  totalSales: 342,
  bio: `I'm a third-generation textile artisan passionate about preserving traditional hand-weaving techniques while creating contemporary pieces that tell meaningful stories. My grandmother taught me to weave when I was just eight years old, and I've been captivated by the rhythm of the loom ever since.

My work focuses on sustainable practices, using only organic fibers and natural dyes derived from plants I grow in my garden. Each piece I create is a meditation on the intersection of tradition and innovation, honoring the past while speaking to modern sensibilities.

When I'm not at my loom, you can find me teaching workshops, foraging for dye materials, or collaborating with other local artisans. I believe that handmade objects carry the energy and intention of their maker, creating connections between creator and user that mass-produced items simply cannot match.`,
  journey: `My artistic journey began in my grandmother's weaving studio in rural Oregon. She was part of a generation of weavers who kept traditional techniques alive during the industrial age. Under her patient guidance, I learned not just the mechanics of weaving, but its deeper philosophy - that each thread matters, that patience creates beauty, and that handmade objects carry stories.

After studying textile arts at the Pacific Northwest College of Art, I spent two years in Guatemala learning traditional backstrap weaving techniques from Mayan artisans. This experience deepened my appreciation for indigenous textile traditions and reinforced my commitment to sustainable, ethical practices.

In 2019, I established my studio in Portland, where I now create custom pieces and teach the next generation of weavers. My work has been featured in several regional galleries and I'm proud to be part of a growing community of artisans dedicated to keeping traditional crafts alive.`,
  achievements: [
    "Featured Artist - Portland Art Museum (2023)",
    "Best in Show - Pacific Northwest Textile Fair (2022)",
    "Sustainability Award - Oregon Craft Council (2021)",
    "Rising Artist Grant - Regional Arts Council (2020)",
  ],
  philosophy:
    "Every thread tells a story, every weave builds a bridge between past and future.",
  studioInfo: {
    name: "Chen Weaving Studio",
    address: "1234 Artisan Way, Portland, OR 97210",
    hours: "By appointment only",
    visitorsWelcome: true,
  },
  socialStats: {
    followers: 1540,
    following: 89,
    posts: 156,
  },
};

// Mock products data
const mockProducts = [
  {
    id: 1,
    name: "Hand-woven Wool Scarf",
    image: "/placeholder.svg",
    price: 89,
    originalPrice: 120,
    rating: 5,
    reviews: 24,
    category: "Scarves",
    featured: true,
  },
  {
    id: 2,
    name: "Wool Mittens",
    image: "/placeholder.svg",
    price: 45,
    rating: 5,
    reviews: 12,
    category: "Accessories",
    featured: false,
  },
  {
    id: 3,
    name: "Woven Table Runner",
    image: "/placeholder.svg",
    price: 65,
    rating: 4,
    reviews: 18,
    category: "Home Decor",
    featured: true,
  },
  {
    id: 4,
    name: "Alpaca Throw Blanket",
    image: "/placeholder.svg",
    price: 180,
    rating: 5,
    reviews: 8,
    category: "Blankets",
    featured: true,
  },
  {
    id: 5,
    name: "Baby Blanket Set",
    image: "/placeholder.svg",
    price: 95,
    rating: 5,
    reviews: 15,
    category: "Baby",
    featured: false,
  },
  {
    id: 6,
    name: "Meditation Cushion Cover",
    image: "/placeholder.svg",
    price: 55,
    rating: 4,
    reviews: 9,
    category: "Home Decor",
    featured: false,
  },
];

const categories = [
  "All",
  "Scarves",
  "Accessories",
  "Home Decor",
  "Blankets",
  "Baby",
];
const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "newest", label: "Newest" },
];

export default function ArtisanProfile() {
  const { id } = useParams();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  // In real app, fetch artisan data based on ID
  const artisan = mockArtisanData;

  if (!artisan) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Artisan Not Found
        </h1>
        <Button asChild>
          <Link to="/marketplace">Back to Marketplace</Link>
        </Button>
      </div>
    );
  }

  // Filter and sort products
  const filteredProducts = mockProducts.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory,
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "featured":
        return b.featured ? 1 : -1;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative">
        {/* Cover Image */}
        <div className="h-64 md:h-80 bg-gradient-to-r from-earth-200 to-gold-100">
          <img
            src={artisan.coverImage}
            alt={`${artisan.name}'s studio`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Back Button */}
        <div className="absolute top-4 left-4">
          <Button asChild variant="secondary" size="sm">
            <Link to="/marketplace" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          </Button>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <Button variant="secondary" size="sm">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="secondary" size="sm">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Profile Info */}
        <div className="absolute -bottom-16 left-4 md:left-8">
          <div className="flex items-end gap-4">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-background border-4 border-background shadow-lg">
              <img
                src={artisan.avatar}
                alt={artisan.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pb-4 text-white">
              <h1 className="text-2xl md:text-3xl font-bold">{artisan.name}</h1>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="h-4 w-4" />
                <span>{artisan.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Stats Bar */}
        <div className="mt-20 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
                  {artisan.totalProducts}
                </div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
                  {artisan.totalSales}
                </div>
                <div className="text-sm text-muted-foreground">Sales</div>
              </div>
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-2xl font-bold text-foreground">
                    {artisan.rating}
                  </span>
                </div>
                <div className="text-sm text-muted-foreground">
                  ({artisan.totalReviews} reviews)
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button>
                <MessageCircle className="h-4 w-4 mr-2" />
                Message
              </Button>
              <Button variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </div>
          </div>
        </div>

        {/* Specialties */}
        <div className="flex flex-wrap gap-2 mb-8">
          {artisan.specialties.map((specialty) => (
            <Badge key={specialty} variant="secondary" className="text-sm">
              {specialty}
            </Badge>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="about" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="products">
              Products ({artisan.totalProducts})
            </TabsTrigger>
            <TabsTrigger value="story">Story</TabsTrigger>
            <TabsTrigger value="studio">Studio</TabsTrigger>
          </TabsList>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>About {artisan.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground whitespace-pre-line">
                      {artisan.bio}
                    </p>
                    <div className="pt-4">
                      <blockquote className="border-l-4 border-primary pl-4 italic text-lg">
                        "{artisan.philosophy}"
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Facts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        Member since {artisan.memberSince}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{artisan.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        {artisan.achievements.length} achievements
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {/* Achievements */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {artisan.achievements.map((achievement, index) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground"
                        >
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-6">
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex items-center gap-2">
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    <Link to={`/product/${product.id}`}>
                      <div className="aspect-square overflow-hidden bg-muted relative">
                        {product.featured && (
                          <Badge className="absolute top-2 left-2 z-10 bg-primary">
                            Featured
                          </Badge>
                        )}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-1">
                            {Array.from({ length: product.rating }).map(
                              (_, i) => (
                                <Star
                                  key={i}
                                  className="h-3 w-3 fill-accent text-accent"
                                />
                              ),
                            )}
                            <span className="text-xs text-muted-foreground ml-1">
                              ({product.reviews})
                            </span>
                          </div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-primary">
                                ${product.price}
                              </span>
                              {product.originalPrice && (
                                <span className="text-sm text-muted-foreground line-through">
                                  ${product.originalPrice}
                                </span>
                              )}
                            </div>
                            <Button
                              size="sm"
                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <ShoppingBag className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardContent className="p-4">
                      <Link
                        to={`/product/${product.id}`}
                        className="flex gap-4"
                      >
                        <div className="w-24 h-24 shrink-0 overflow-hidden rounded-lg bg-muted">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <h3 className="font-semibold text-foreground hover:text-primary transition-colors">
                              {product.name}
                            </h3>
                            {product.featured && (
                              <Badge variant="secondary" className="text-xs">
                                Featured
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: product.rating }).map(
                              (_, i) => (
                                <Star
                                  key={i}
                                  className="h-3 w-3 fill-accent text-accent"
                                />
                              ),
                            )}
                            <span className="text-xs text-muted-foreground ml-1">
                              ({product.reviews} reviews)
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-primary">
                                ${product.price}
                              </span>
                              {product.originalPrice && (
                                <span className="text-sm text-muted-foreground line-through">
                                  ${product.originalPrice}
                                </span>
                              )}
                            </div>
                            <Button size="sm">
                              <ShoppingBag className="h-3 w-3 mr-2" />
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Story Tab */}
          <TabsContent value="story">
            <Card>
              <CardHeader>
                <CardTitle>My Artistic Journey</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {artisan.journey}
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Studio Tab */}
          <TabsContent value="studio">
            <Card>
              <CardHeader>
                <CardTitle>Studio Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Visit My Studio</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <strong>Studio Name:</strong> {artisan.studioInfo.name}
                      </p>
                      <p>
                        <strong>Address:</strong> {artisan.studioInfo.address}
                      </p>
                      <p>
                        <strong>Hours:</strong> {artisan.studioInfo.hours}
                      </p>
                      <p>
                        <strong>Visitors:</strong>{" "}
                        {artisan.studioInfo.visitorsWelcome
                          ? "Welcome by appointment"
                          : "Not available"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Workshop & Classes</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      I offer hands-on weaving workshops for all skill levels.
                      Learn traditional techniques in a supportive, creative
                      environment.
                    </p>
                    <Button>Inquire About Workshops</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
