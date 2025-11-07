import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { GuestGuard, ProtectedGuard, CreatorGuard } from './components/RouteGuards';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import SmartReply from './pages/SmartReply';
import Upload from './pages/Upload';
import Services from './pages/Services';
import Shop from './pages/Shop';
import Community from './pages/Community';
import Calendar from './pages/Calendar';
import Showcase from './pages/Showcase';
import CreatorProfile from './pages/CreatorProfile';
import NotFound from './pages/NotFound';
import RouteGallery from './pages/RouteGallery';

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="bg-brand-dark text-stone-200 font-sans leading-relaxed tracking-wide min-h-screen">
          {/* Background overlay */}
          <div
            className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 opacity-10"
            style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}
          ></div>

          {/* Content */}
          <div className="relative z-10">
            <Navigation />

            <main className="pt-20">
              <Routes>
                {/* Public routes */}
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/community" element={<Community />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/showcase" element={<Showcase />} />
                <Route path="/c/:username" element={<CreatorProfile />} />

                {/* Guest routes (redirect to /profile if authenticated) */}
                <Route
                  path="/login"
                  element={
                    <GuestGuard>
                      <Login />
                    </GuestGuard>
                  }
                />
                <Route
                  path="/signup"
                  element={
                    <GuestGuard>
                      <Signup />
                    </GuestGuard>
                  }
                />

                {/* Protected routes (require authentication) */}
                <Route
                  path="/profile"
                  element={
                    <ProtectedGuard>
                      <Profile />
                    </ProtectedGuard>
                  }
                />
                <Route
                  path="/messages"
                  element={
                    <ProtectedGuard>
                      <Messages />
                    </ProtectedGuard>
                  }
                />
                <Route
                  path="/smart-reply"
                  element={
                    <ProtectedGuard>
                      <SmartReply />
                    </ProtectedGuard>
                  }
                />

                {/* Creator routes (require authentication + creator role) */}
                <Route
                  path="/upload"
                  element={
                    <CreatorGuard>
                      <Upload />
                    </CreatorGuard>
                  }
                />

                {/* Dev-only route */}
                {import.meta.env.DEV && (
                  <Route path="/__routes" element={<RouteGallery />} />
                )}

                {/* 404 catch-all */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;