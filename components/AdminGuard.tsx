import React, { useState, useEffect } from 'react';

const ADMIN_PASSWORD = 'f3l1p3';
const SESSION_KEY = 'renascer_admin_auth';

interface AdminGuardProps {
    children: React.ReactNode;
}

const AdminGuard: React.FC<AdminGuardProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) {
            setIsAuthenticated(true);
            setError(false);
        } else {
            setError(true);
            setPassword('');
        }
    };

    if (isAuthenticated) {
        return <>{children}</>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 animate-fade-in">
            <div className="bg-surface-light dark:bg-surface-dark p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 max-w-sm w-full text-center">
                <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-3xl text-gray-400">lock</span>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Acesso Restrito</h2>
                <p className="text-sm text-gray-500 mb-6">Esta página requer senha de administrador.</p>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div className="relative">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                setError(false);
                            }}
                            placeholder="Digite a senha..."
                            className={`w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-black/20 border outline-none focus:ring-2 transition-all ${error
                                ? 'border-red-500 focus:ring-red-500/20 text-red-500 placeholder:text-red-300'
                                : 'border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-primary/20 dark:text-white'
                                }`}
                            autoFocus
                        />
                        {error && (
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-red-500 text-sm">error</span>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={!password}
                        className="w-full h-12 bg-primary text-white font-bold rounded-xl hover:bg-primary-dark transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/20"
                    >
                        Acessar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminGuard;
