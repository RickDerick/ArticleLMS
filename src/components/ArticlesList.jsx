import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Edit, Trash, Plus } from 'lucide-react'
import { useAuth } from '@/context/AuthContext';
import { showSuccess, showError } from "@/utils/toast"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"

function ArticlesList({ readOnly = true }) {``
  const {getToken}= useAuth();
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    try {
      setLoading(true)
      const token = getToken()
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/article/articles`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setArticles(response.data.data)
    } catch (error) {
      console.error("Error fetching articles:", error)
      showError("Error fetching articles")
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      const token = getToken();
      await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/admin/articles/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      showSuccess("Article Deleted Successfully")
      // Refresh the articles list
      fetchArticles()
    } catch (error) {
      console.error("Error deleting article:", error)
      showError("Error deleting article:", error)
    }
  }

  const filteredArticles = articles.filter(article => 
    article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.content?.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Articles</h1>
        
        {!readOnly && (
          <Link to="/dashboard/admin/articles/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Add New Article
            </Button>
          </Link>
        )}
      </div>

      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
        <Input
          type="search"
          placeholder="Search articles..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="text-center py-8">Loading articles...</div>
      ) : (
        <div className="flex flex-col gap-4">
          {filteredArticles.length === 0 ? (
            <div className="col-span-full text-center py-8">No articles found</div>
          ) : (
            filteredArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden">
                {article.image_url && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={article.image_url || "/placeholder.svg"} 
                      alt={article.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.content}</p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {new Date(article.created_at).toLocaleDateString()}
                    </span>
                    
                    {!readOnly && (
                      <div className="flex gap-2">
                        <Link to={`/dashboard/articles/edit/${article.id}`}>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </Link>
                        
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" size="sm" className="text-red-500">
                              <Trash className="h-4 w-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete the article.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction 
                                onClick={() => handleDelete(article.id)} 
                                className="bg-red-500 text-white"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default ArticlesList