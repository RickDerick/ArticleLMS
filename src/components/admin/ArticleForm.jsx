import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Save } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { showSuccess, showError } from "@/utils/toast"

const ArticleForm = () => {
  const {getToken}= useAuth();
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category_id: '',
    image_url: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [categories, setCategories] = useState([ ]);

  useEffect(() => {
    fetchCategories();
    if (isEditMode) {
      fetchArticle();
    }
  }, [id]);

  const fetchArticle = async () => {
    try {
      setLoading(true);
      const token = getToken();
      const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/article/articles/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setFormData(response.data.data || []);
      console.log('check',response.data.data  )
    } catch (error) {
      showError('Failed to fetch article details');
      console.error(error);
      setCategories([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
  try {
    const token = getToken();
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/categories/categories-setup`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setCategories(response.data.data);
  } catch (err) {
    console.error("Failed to fetch categories", err);
  }
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, category_id: parseInt(value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const token = getToken();
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };

      if (isEditMode) {
        await axios.put(`${import.meta.env.VITE_API_BASE_URL}/admin/articles/${id}`, formData, { headers });
      } else {
        await axios.post(`${import.meta.env.VITE_API_BASE_URL}/admin/articles`, formData, { headers })
        showSuccess("Article submitted successfully!");
        
      }
      navigate('/dashboard');
    } catch (error) {
      showError(error.response?.data?.message || 'An error occurred while saving the article');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center gap-2">
        <Button variant="ghost" onClick={() => navigate('/dashboard/admin/articles')}>
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Articles
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{isEditMode ? 'Edit Article' : 'Create New Article'}</CardTitle>
        </CardHeader>
        <CardContent>
          {loading && !isEditMode ? (
            <div className="text-center p-4">Loading...</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && <div className="p-3 text-sm text-white bg-red-500 rounded">{error}</div>}
              
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">Title</label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Article title"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium">Category</label>
                <Select 
                  value={formData.category_id?.toString()} 
                  onValueChange={handleSelectChange}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories?.map(category => (
                      <SelectItem key={category.id} value={category.id.toString()}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="image_url" className="text-sm font-medium">Image URL</label>
                <Input
                  id="image_url"
                  name="image_url"
                  value={formData.image_url}
                  onChange={handleChange}
                  placeholder="Image URL (optional)"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="content" className="text-sm font-medium">Content</label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  placeholder="Article content"
                  rows={10}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={loading}
              >
                <Save className="mr-2 h-4 w-4" />
                {loading ? 'Saving...' : 'Save Article'}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleForm;