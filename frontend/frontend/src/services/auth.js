

export const saveAuth = (token, role) => {
  localStorage.setItem("token", token);
  localStorage.setItem("role", role);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const getRole = () => {
  return localStorage.getItem("role");
};

export const isAdmin = () => {
  const role = localStorage.getItem("role");
  return role === "admin";
};

export const isLoggedIn = () => {
  const token = localStorage.getItem("token");
  return token !== null && token !== undefined;
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};