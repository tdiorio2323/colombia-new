// Route access levels
export type Access = "public" | "guest" | "protected" | "creator";

export interface RouteDef {
  path: string;
  name: string;
  access: Access;
  dynamic?: boolean;
}

export const ROUTES: RouteDef[] = [
  // Public routes - accessible to everyone
  { path: "/", name: "Home", access: "public" },
  { path: "/services", name: "Services", access: "public" },
  { path: "/shop", name: "Shop", access: "public" },
  { path: "/community", name: "Community", access: "public" },
  { path: "/calendar", name: "Calendar", access: "public" },
  { path: "/showcase", name: "Showcase", access: "public" },
  { path: "/c/:username", name: "Creator Profile", access: "public", dynamic: true },

  // Guest routes - only for non-authenticated users
  { path: "/login", name: "Login", access: "guest" },
  { path: "/signup", name: "Signup", access: "guest" },

  // Protected routes - requires authentication
  { path: "/messages", name: "Messages", access: "protected" },
  { path: "/profile", name: "Profile", access: "protected" },
  { path: "/smart-reply", name: "Smart Reply", access: "protected" },

  // Creator routes - requires authentication + creator role
  { path: "/upload", name: "Upload", access: "creator" },

  // Catch-all
  { path: "*", name: "NotFound", access: "public" },
];
