import { Route, Routes } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './lib/QueryClient';
import { ReactQueryDevtools } from 'react-query/devtools';
import HomePage from './pages/Home.page';
import LoginPage from './pages/auth/Login.page';
import RegisterPage from './pages/auth/Register.page';
import PostListPage from './pages/post/PostList.page';
import PostDetailPage from './pages/post/PostDetail.page';
import PostWritePage from './pages/post/PostWrite.page';
import PhotoListPage from './pages/photo/PhotoList.page';
import PhotoDetailPage from './pages/photo/PhotoDetail.page';
import PrivacyPage from './pages/common/Privacy.page';
import TermsPage from './pages/common/Terms.page';
import CustomerPage from './pages/Customer.page';
import './App.scss';

function App() {
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/post" element={<PostListPage />} />
          <Route path="/post/:id" element={<PostDetailPage />} />
          <Route path="/post/write" element={<PostWritePage />} />
          <Route path="/photo" element={<PhotoListPage />} />
          <Route path="/photo/:id" element={<PhotoDetailPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/customer" element={<CustomerPage />} />
        </Routes>
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </QueryClientProvider>
    </div>
  );
}

export default App;
