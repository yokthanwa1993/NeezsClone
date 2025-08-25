import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRole } from '../../contexts/RoleContext';
import { useAuth } from '../../contexts/AuthContext';
import { User, Building2, ArrowRight, Briefcase, Search } from 'lucide-react';

const RoleSelection: React.FC = () => {
  const navigate = useNavigate();
  const { setRole } = useRole();
  const { user } = useAuth();

  const handleRoleSelect = (role: 'applicant' | 'employer') => {
    setRole(role);
    
    // Redirect to login page based on role
    if (role === 'applicant') {
      navigate('/seeker/login');
    } else {
      navigate('/employer/login');
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex items-center justify-center p-4 overflow-hidden">
      <div className="max-w-md w-full animate-fadeIn">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
            <Briefcase className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-3 drop-shadow-lg">
            NEEZS
          </h1>
          <p className="text-white/90 text-lg font-medium">
            เลือกประเภทการใช้งาน
          </p>
          <p className="text-white/70 text-sm mt-2">
            {user?.name ? `สวัสดี ${user.name}!` : 'เริ่มต้นการใช้งานของคุณ'}
          </p>
        </div>

        {/* Role Cards */}
        <div className="space-y-6">
          {/* Applicant Card */}
          <button
            onClick={() => handleRoleSelect('applicant')}
            className="group w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:bg-white hover:shadow-3xl transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105 active:scale-95"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-5">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    ผู้หางาน
                  </h3>
                  <p className="text-gray-600 font-medium">
                    ค้นหางานที่ใช่ เจอโอกาสใหม่
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    สมัครงาน • ติดตามสถานะ • รับงาน
                  </p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </button>

          {/* Employer Card */}
          <button
            onClick={() => handleRoleSelect('employer')}
            className="group w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:bg-white hover:shadow-3xl transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105 active:scale-95"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-5">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    ผู้จ้างงาน
                  </h3>
                  <p className="text-gray-600 font-medium">
                    หาคนที่ใช่ เจอคนเก่ง
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    ประกาศงาน • คัดเลือกคน • จัดการทีม
                  </p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-10">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <p className="text-white/80 text-sm font-medium">
              💡 คุณสามารถเปลี่ยนประเภทการใช้งานได้ในภายหลัง
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;