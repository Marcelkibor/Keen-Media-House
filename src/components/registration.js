import React, { useState } from 'react';
import { Camera, Users, Calendar, DollarSign, LogOut, UserPlus, Trash2, Eye, Edit, X } from 'lucide-react';

const AdminDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  // User Management State
  const [users, setUsers] = useState([
    { id: 1, username: 'admin', email: 'admin@keen.com', role: 'Admin', status: 'Active' },
    { id: 2, username: 'manager', email: 'manager@keen.com', role: 'Manager', status: 'Active' }
  ]);

  // Bookings State
  const [bookings] = useState([
    {
      id: 1,
      clientName: 'John Doe',
      email: 'john@email.com',
      phone: '+254 712 345 678',
      package: 'Royal Package',
      date: '2024-12-25',
      teamMember: 'Felix Agwenye',
      status: 'pending'
    },
    {
      id: 2,
      clientName: 'Jane Smith',
      email: 'jane@email.com',
      phone: '+254 723 456 789',
      package: 'Premium Package',
      date: '2024-12-20',
      teamMember: 'Edwin Koech',
      status: 'confirmed'
    },
    {
      id: 3,
      clientName: 'Mike Johnson',
      email: 'mike@email.com',
      phone: '+254 734 567 890',
      package: 'Classic Package',
      date: '2024-12-15',
      status: 'completed'
    }
  ]);

  // Login Component
  const LoginForm = () => {
    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleLogin = (e) => {
      e.preventDefault();
      if (loginData.username === 'admin' && loginData.password === 'admin123') {
        setIsLoggedIn(true);
        setCurrentUser({ username: 'admin', role: 'Admin' });
        setError('');
      } else {
        setError('Invalid credentials');
      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              KEEN ADMIN
            </h1>
            <p className="text-gray-400 mt-2">Login to Dashboard</p>
          </div>

          {error && (
            <div className="bg-red-900/20 text-red-400 p-3 rounded-lg mb-4">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2 font-semibold">Username</label>
              <input
                type="text"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 font-semibold">Password</label>
              <input
                type="password"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Login
            </button>

            <p className="text-gray-500 text-center text-sm">
              Default: admin / admin123
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Registration Form Component
  const RegistrationForm = () => {
    const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      role: 'User'
    });
    const [formError, setFormError] = useState('');

    const handleRegister = () => {
      if (formData.password !== formData.confirmPassword) {
        setFormError('Passwords do not match');
        return;
      }

      if (formData.password.length < 6) {
        setFormError('Password must be at least 6 characters');
        return;
      }

      const newUser = {
        id: users.length + 1,
        username: formData.username,
        email: formData.email,
        role: formData.role,
        status: 'Active'
      };

      setUsers([...users, newUser]);
      setShowRegisterForm(false);
      setFormData({ username: '', email: '', password: '', confirmPassword: '', role: 'User' });
      setFormError('');
    };

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 w-full max-w-md relative">
          <button
            onClick={() => setShowRegisterForm(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>

          <h2 className="text-2xl font-bold text-white mb-6">Register New User</h2>

          {formError && (
            <div className="bg-red-900/20 text-red-400 p-3 rounded-lg mb-4">
              {formError}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label className="block text-gray-300 mb-2">Username</label>
              <input
                type="text"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Password</label>
              <input
                type="password"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Confirm Password</label>
              <input
                type="password"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Role</label>
              <select
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              >
                <option value="User">User</option>
                <option value="Manager">Manager</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            <button
              onClick={handleRegister}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Register User
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Stats Card Component
  const StatCard = ({ icon: Icon, value, label, gradient }) => (
    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition">
      <div className={`w-12 h-12 rounded-lg ${gradient} flex items-center justify-center mb-4`}>
        <Icon className="text-white" size={24} />
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-gray-400">{label}</div>
    </div>
  );

  // Dashboard Section
  const DashboardSection = () => (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here's your business overview.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          icon={Calendar}
          value={bookings.length}
          label="Total Bookings"
          gradient="bg-gradient-to-r from-blue-500 to-cyan-500"
        />
        <StatCard
          icon={Camera}
          value={bookings.filter(b => b.status === 'pending').length}
          label="Pending"
          gradient="bg-gradient-to-r from-yellow-500 to-orange-500"
        />
        <StatCard
          icon={Users}
          value={bookings.filter(b => b.status === 'confirmed').length}
          label="Confirmed"
          gradient="bg-gradient-to-r from-green-500 to-emerald-500"
        />
        <StatCard
          icon={DollarSign}
          value="KES 850K"
          label="Monthly Revenue"
          gradient="bg-gradient-to-r from-purple-500 to-pink-500"
        />
      </div>

      <h2 className="text-2xl font-bold text-white mb-4">Recent Bookings</h2>
      <BookingsTable data={bookings.slice(0, 3)} />
    </div>
  );

  // Bookings Table Component
  const BookingsTable = ({ data }) => (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-900">
            <tr>
              <th className="px-6 py-4 text-left text-purple-400 font-semibold">Client</th>
              <th className="px-6 py-4 text-left text-purple-400 font-semibold">Package</th>
              <th className="px-6 py-4 text-left text-purple-400 font-semibold">Date</th>
              <th className="px-6 py-4 text-left text-purple-400 font-semibold">Status</th>
              <th className="px-6 py-4 text-left text-purple-400 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((booking) => (
              <tr key={booking.id} className="border-t border-gray-700 hover:bg-gray-700/50">
                <td className="px-6 py-4 text-white">{booking.clientName}</td>
                <td className="px-6 py-4 text-gray-300">{booking.package}</td>
                <td className="px-6 py-4 text-gray-300">{booking.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    booking.status === 'pending' ? 'bg-yellow-900/30 text-yellow-400' :
                    booking.status === 'confirmed' ? 'bg-green-900/30 text-green-400' :
                    'bg-blue-900/30 text-blue-400'
                  }`}>
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <button className="text-purple-400 hover:text-purple-300">
                    <Eye size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Users Section
  const UsersSection = () => (
    <div>
      <div className="mb-8 flex justify-between items-center flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">User Management</h1>
          <p className="text-gray-400">Manage admin users and permissions.</p>
        </div>
        <button
          onClick={() => setShowRegisterForm(true)}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition flex items-center gap-2"
        >
          <UserPlus size={20} />
          Add New User
        </button>
      </div>

      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-900">
              <tr>
                <th className="px-6 py-4 text-left text-purple-400 font-semibold">Username</th>
                <th className="px-6 py-4 text-left text-purple-400 font-semibold">Email</th>
                <th className="px-6 py-4 text-left text-purple-400 font-semibold">Role</th>
                <th className="px-6 py-4 text-left text-purple-400 font-semibold">Status</th>
                <th className="px-6 py-4 text-left text-purple-400 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-t border-gray-700 hover:bg-gray-700/50">
                  <td className="px-6 py-4 text-white font-semibold">{user.username}</td>
                  <td className="px-6 py-4 text-gray-300">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-purple-900/30 text-purple-400">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-900/30 text-green-400">
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="text-purple-400 hover:text-purple-300">
                      <Edit size={18} />
                    </button>
                    <button 
                      className="text-red-400 hover:text-red-300"
                      onClick={() => setUsers(users.filter(u => u.id !== user.id))}
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  // Main Dashboard Component
  const Dashboard = () => (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-800/95 backdrop-blur border-b border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-8">
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                KEEN ADMIN
              </h1>
              
              <div className="hidden md:flex gap-6">
                <button
                  onClick={() => setActiveSection('dashboard')}
                  className={`text-sm font-semibold px-4 py-2 rounded-lg transition ${
                    activeSection === 'dashboard'
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Dashboard
                </button>
                <button
                  onClick={() => setActiveSection('bookings')}
                  className={`text-sm font-semibold px-4 py-2 rounded-lg transition ${
                    activeSection === 'bookings'
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Bookings
                </button>
                <button
                  onClick={() => setActiveSection('users')}
                  className={`text-sm font-semibold px-4 py-2 rounded-lg transition ${
                    activeSection === 'users'
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  Users
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-400 hidden md:block">
                Welcome, <span className="text-white font-semibold">{currentUser?.username}</span>
              </span>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition flex items-center gap-2"
              >
                <LogOut size={18} />
                <span className="hidden md:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {activeSection === 'dashboard' && <DashboardSection />}
        {activeSection === 'bookings' && (
          <div>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">All Bookings</h1>
              <p className="text-gray-400">Manage all client bookings and appointments.</p>
            </div>
            <BookingsTable data={bookings} />
          </div>
        )}
        {activeSection === 'users' && <UsersSection />}
      </div>

      {/* Registration Modal */}
      {showRegisterForm && <RegistrationForm />}
    </div>
  );

  return isLoggedIn ? <Dashboard /> : <LoginForm />;
};

export default AdminDashboard;
