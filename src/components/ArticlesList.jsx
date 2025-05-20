import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"
import { Card, CardDescription, CardTitle } from "./ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

function ArticlesList() {
  const articles = [
    {
      id: 1,
      title: "A Smarter You Is Only 5 Minutes Away",
      excerpt:
        "Intelligence is a work in progress. Everything a smart person knows, they learned from somewhere at one point or another. Getting smarter doesn't necessarily mean a huge commitment of time and energy...",
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 2,
      title: "Everyone is a designer. Get over it.",
      excerpt:
        "Recently, Jared Spool caught my attention with an article about how Netflix's performance engineers are actually designers. It's a provocative idea, but it makes sense. His argument is that everyone in your...",
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 3,
      title: "The 7 Questions You'll Be Asked at a UX Design Interview",
      excerpt:
        "Recently, Jared Spool caught my attention with an article about how Netflix's performance engineers are actually designers. It's a provocative idea, but it makes sense. His argument is that everyone in your...",
      image: "/placeholder.svg?height=100&width=150",
    },
    {
      id: 4,
      title: "Making Learning Easy by Design",
      excerpt:
        "How can design make the process of a choice? It's not as easy as it sounds. First out, people usually won't go out of their way to learn something new. Research shows that only 3% of adults in the U.S...",
      image: "/placeholder.svg?height=100&width=150",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">NEW</h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-muted-foreground">01/12</span>
          <div className="flex">
            <button className="p-1 rounded-l-md border border-r-0 border-gray-200">
              <ChevronLeft size={16} />
            </button>
            <button className="p-1 rounded-r-md border border-gray-200">
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Articles</TabsTrigger>
          <TabsTrigger value="my">My Articles</TabsTrigger>
          <TabsTrigger value="group">Group Articles</TabsTrigger>
          <TabsTrigger value="government">Government Articles</TabsTrigger>
          <TabsTrigger value="new">New Magazine</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-4">
        {articles.map((article) => (
          <Card key={article.id} className="overflow-hidden">
            <div className="flex">
              <div className="w-[150px] h-[100px] shrink-0">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                <CardDescription className="text-sm">{article.excerpt}</CardDescription>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ArticlesList
