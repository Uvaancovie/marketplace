import DarkModeToggle from './darkmode';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="p-4 bg-gray-800">
        <h1 className="text-2xl">My Marketplace</h1>
        <DarkModeToggle />
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
};

export default Layout;
