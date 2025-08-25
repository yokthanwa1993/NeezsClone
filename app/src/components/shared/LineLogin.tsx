import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLiff } from '@/contexts/LiffContext';
import { useAuth } from '@/contexts/AuthContext';

interface LineLoginProps {
  onLoginSuccess?: () => void;
}

const LineLogin: React.FC<LineLoginProps> = ({ onLoginSuccess }) => {
  const navigate = useNavigate();
  const { isLiffReady, isLiffLoading, liff } = useLiff();
  const { user } = useAuth();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    // If authentication completes and we get a user object, proceed.
    if (user) {
      console.log('✅ Auth user found, proceeding to login success...');
      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        navigate('/seeker/home');
      }
    }
  }, [user, onLoginSuccess]);


  const handleLogin = async () => {
    if (!isLiffReady || !liff) {
      alert('กรุณารอสักครู่และลองใหม่อีกครั้ง');
      return;
    }

    setIsLoggingIn(true);
    try {
      if (liff.isLoggedIn()) {
        console.log('User is already logged in to LIFF, but auth context is missing. Re-authenticating.');
      }
      
      const redirectUri = new URL('/callback', import.meta.env.VITE_APP_DOMAIN || window.location.origin).toString();
      console.log('🚀 Starting LINE login with redirect:', redirectUri);

      // Start LINE login
      liff.login({ redirectUri });

    } catch (error: any) {
      console.error('❌ LINE login error:', error);
      alert('เกิดข้อผิดพลาดในการเข้าสู่ระบบ กรุณาลองใหม่อีกครั้ง');
      setIsLoggingIn(false);
    }
  };

  if (isLiffLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="w-16 h-16 mx-auto mb-6">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent"></div>
          </div>
          <h2 className="text-2xl font-bold mb-2">กำลังเชื่อมต่อ...</h2>
          <p className="text-green-100">กำลังเตรียมระบบ LINE</p>
        </div>
      </div>
    );
  }

  if (isLoggingIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center p-4">
        <div className="text-center text-white">
          <div className="w-16 h-16 mx-auto mb-6">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-white border-t-transparent"></div>
          </div>
          <h2 className="text-2xl font-bold mb-2">กำลังเข้าสู่ระบบ...</h2>
          <p className="text-green-100">กรุณารอสักครู่</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center p-4">
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-24 h-24 mx-auto mb-6">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="45" fill="#00C300"/>
                <path d="M25 45h50c2.76 0 5 2.24 5 5v15c0 2.76-2.24 5-5 5H60l-10 8v-8H25c-2.76 0-5-2.24-5-5V50c0-2.76 2.24-5 5-5z" fill="white"/>
                <circle cx="35" cy="57" r="3" fill="#00C300"/>
                <circle cx="50" cy="57" r="3" fill="#00C300"/>
                <circle cx="65" cy="57" r="3" fill="#00C300"/>
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">NEEZS</h1>
            <p className="text-gray-600 text-lg">เข้าสู่ระบบด้วย LINE</p>
            <p className="text-gray-500 text-sm mt-2">ง่าย รวดเร็ว ปลอดภัย</p>
          </div>

          <button
            onClick={handleLogin}
            disabled={!isLiffReady || isLoggingIn}
            className="w-full bg-green-500 text-white font-bold py-4 px-6 rounded-2xl hover:bg-green-600 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:transform-none shadow-lg"
          >
            <div className="flex items-center justify-center space-x-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
              </svg>
              <span>เข้าสู่ระบบด้วย LINE</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LineLogin;