"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  BookOpen, 
  Briefcase, 
  TrendingUp, 
  Settings, 
  Plus,
  Edit,
  Trash2,
  Eye,
  BarChart3,
  FileText,
  MessageSquare
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { title: "Total Students", value: "2,847", change: "+12%", icon: Users, color: "text-blue-400" },
    { title: "Active Courses", value: "24", change: "+3", icon: BookOpen, color: "text-green-400" },
    { title: "Internships", value: "15", change: "+5", icon: Briefcase, color: "text-yellow-400" },
    { title: "Revenue", value: "$45,230", change: "+18%", icon: TrendingUp, color: "text-purple-400" }
  ];

  const recentStudents = [
    { name: "John Doe", course: "JavaScript", progress: 75, joined: "2 days ago" },
    { name: "Jane Smith", course: "Python", progress: 45, joined: "1 week ago" },
    { name: "Mike Johnson", course: "React", progress: 90, joined: "3 days ago" },
    { name: "Sarah Wilson", course: "Node.js", progress: 30, joined: "5 days ago" }
  ];

  const courses = [
    { id: 1, title: "JavaScript Fundamentals", students: 1250, status: "Active", created: "2024-01-15" },
    { id: 2, title: "Python for Beginners", students: 980, status: "Active", created: "2024-01-10" },
    { id: 3, title: "React Development", students: 750, status: "Active", created: "2024-01-20" },
    { id: 4, title: "Node.js Backend", students: 650, status: "Draft", created: "2024-01-25" }
  ];

  const internships = [
    { id: 1, company: "TechCorp", role: "Frontend Developer", applicants: 45, status: "Active" },
    { id: 2, company: "DataFlow Inc", role: "Data Analyst", applicants: 32, status: "Active" },
    { id: 3, company: "CloudSys", role: "DevOps Engineer", applicants: 28, status: "Closed" },
    { id: 4, company: "MobileFirst", role: "React Native Dev", applicants: 38, status: "Active" }
  ];

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-300 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className={`text-sm ${stat.color}`}>{stat.change}</p>
                  </div>
                  <IconComponent className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
          <CardHeader>
            <CardTitle className="text-white">Recent Students</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentStudents.map((student, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <div>
                    <p className="text-white font-medium">{student.name}</p>
                    <p className="text-gray-300 text-sm">{student.course} • {student.joined}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-yellow-400 font-medium">{student.progress}%</p>
                    <div className="w-16 h-2 bg-gray-600 rounded-full mt-1">
                      <div 
                        className="h-2 bg-yellow-400 rounded-full" 
                        style={{ width: `${student.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Course
              </Button>
              <Button className="bg-gradient-to-r from-green-600 to-green-500 text-white">
                <Plus className="w-4 h-4 mr-2" />
                Add Internship
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
              <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black">
                <MessageSquare className="w-4 h-4 mr-2" />
                Messages
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  const renderCourses = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Course Management</h2>
        <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black">
          <Plus className="w-4 h-4 mr-2" />
          Add New Course
        </Button>
      </div>

      <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left p-4 text-gray-300">Course Title</th>
                  <th className="text-left p-4 text-gray-300">Students</th>
                  <th className="text-left p-4 text-gray-300">Status</th>
                  <th className="text-left p-4 text-gray-300">Created</th>
                  <th className="text-left p-4 text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id} className="border-t border-white/10">
                    <td className="p-4 text-white">{course.title}</td>
                    <td className="p-4 text-gray-300">{course.students}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        course.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {course.status}
                      </span>
                    </td>
                    <td className="p-4 text-gray-300">{course.created}</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-blue-500/30 text-blue-400">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-yellow-500/30 text-yellow-400">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-red-500/30 text-red-400">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderInternships = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Internship Management</h2>
        <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-black">
          <Plus className="w-4 h-4 mr-2" />
          Add New Internship
        </Button>
      </div>

      <Card className="bg-white/10 backdrop-blur-sm border-yellow-400/30">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="text-left p-4 text-gray-300">Company</th>
                  <th className="text-left p-4 text-gray-300">Role</th>
                  <th className="text-left p-4 text-gray-300">Applicants</th>
                  <th className="text-left p-4 text-gray-300">Status</th>
                  <th className="text-left p-4 text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {internships.map((internship) => (
                  <tr key={internship.id} className="border-t border-white/10">
                    <td className="p-4 text-white">{internship.company}</td>
                    <td className="p-4 text-gray-300">{internship.role}</td>
                    <td className="p-4 text-gray-300">{internship.applicants}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        internship.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {internship.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="border-blue-500/30 text-blue-400">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-yellow-500/30 text-yellow-400">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline" className="border-red-500/30 text-red-400">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const tabs = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "courses", label: "Courses", icon: BookOpen },
    { id: "internships", label: "Internships", icon: Briefcase },
    { id: "students", label: "Students", icon: Users },
    { id: "settings", label: "Settings", icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-transparent py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
            MindCraft Dashboard
          </h1>
          <p className="text-gray-300">Manage your courses, students, and internships</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-white/10">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-t-lg transition-colors ${
                  activeTab === tab.id
                    ? "bg-yellow-500/20 text-yellow-400 border-b-2 border-yellow-400"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <IconComponent className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div>
          {activeTab === "overview" && renderOverview()}
          {activeTab === "courses" && renderCourses()}
          {activeTab === "internships" && renderInternships()}
          {activeTab === "students" && (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-2">Student Management</h3>
              <p className="text-gray-300">Student management features coming soon...</p>
            </div>
          )}
          {activeTab === "settings" && (
            <div className="text-center py-12">
              <Settings className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl text-white mb-2">Settings</h3>
              <p className="text-gray-300">Settings panel coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;