"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar,
  Award,
  Book,
  Activity,
  Users,
  Star,
  Linkedin,
  Twitter,
  GitBranch,
  FileText,
} from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface Connection {
  name: string;
  role: string;
  avatar: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Education {
  degree: string;
  institution: string;
  year: string;
}

// ... (keep your existing interfaces)

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("info");

  const user = {
    name: "Alex Johnson",
    role: "Senior Software Engineer",
    email: "alex.johnson@example.com",
    phone: "+1 234 567 8901",
    location: "San Francisco, CA",
    department: "Engineering",
    joinDate: "2019-05-15",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "Passionate about creating efficient and scalable software solutions. Always eager to learn new technologies and mentor junior developers.",
    skills: [
      { name: "React", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "GraphQL", level: 75 },
      { name: "Docker", level: 70 },
    ],
    connections: [
      {
        name: "Emma Wilson",
        role: "UX Designer",
        avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      },
      {
        name: "Michael Chen",
        role: "Product Manager",
        avatar: "https://randomuser.me/api/portraits/men/34.jpg",
      },
      {
        name: "Sarah Brown",
        role: "Data Scientist",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      },
    ],
    experience: [
      {
        title: "Senior Software Engineer",
        company: "TechCorp Inc.",
        period: "2019 - Present",
        description:
          "Lead development of cloud-based solutions, mentored junior developers, and implemented CI/CD pipelines.",
      },
      {
        title: "Software Engineer",
        company: "InnoSoft Solutions",
        period: "2016 - 2019",
        description:
          "Developed and maintained multiple web applications using React and Node.js.",
      },
    ],
    education: [
      {
        degree: "M.S. in Computer Science",
        institution: "Stanford University",
        year: "2016",
      },
      {
        degree: "B.S. in Computer Science",
        institution: "University of California, Berkeley",
        year: "2014",
      },
    ],
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
      github: "https://github.com/alexjohnson",
    },
  };

  const SkillBar: React.FC<Skill> = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm md:text-base font-medium text-gray-700">
          {name}
        </span>
        <span className="text-xs md:text-sm font-medium text-gray-500">
          {level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-[#0081C9] h-2 rounded-full transition-all duration-300 ease-in-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  const TabButton: React.FC<{
    name: string;
    label: string;
    icon: React.ReactNode;
  }> = ({ name, label, icon }) => (
    <button
      className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ease-in-out
                ${
                  activeTab === name
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
      onClick={() => setActiveTab(name)}
    >
      {icon}
      <span className="ml-2 hidden sm:inline">{label}</span>
    </button>
  );

  return (
    <div className="flex-grow p-6 sm:p-6 ">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden mt-3">
          <div className="p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mb-4 sm:mb-0 sm:mr-6"
              />
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {user.name}
                </h1>
                <p className="text-lg sm:text-xl text-[#0081C9]">{user.role}</p>
                <p className="text-sm text-gray-500 mt-1">{user.department}</p>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-200">
            <div className="px-4 sm:px-10">
              <nav className="-mb-px flex justify-between sm:justify-start sm:space-x-8">
                <TabButton
                  name="info"
                  label="Info & Bio"
                  icon={<FileText size={18} />}
                />
                <TabButton
                  name="connections"
                  label="Connections"
                  icon={<Users size={18} />}
                />
                <TabButton
                  name="resume"
                  label="Resume"
                  icon={<Briefcase size={18} />}
                />
                <TabButton
                  name="social"
                  label="Social"
                  icon={<Linkedin size={18} />}
                />
              </nav>
            </div>
          </div>
          <div className="p-4 sm:p-10">
            {activeTab === "info" && (
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                  Info & Bio
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                  <div className="flex items-center">
                    <Mail className="text-gray-400 mr-2" size={18} />
                    <span className="text-sm sm:text-base text-gray-600">
                      {user.email}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-gray-400 mr-2" size={18} />
                    <span className="text-sm sm:text-base text-gray-600">
                      {user.phone}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="text-gray-400 mr-2" size={18} />
                    <span className="text-sm sm:text-base text-gray-600">
                      {user.location}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="text-gray-400 mr-2" size={18} />
                    <span className="text-sm sm:text-base text-gray-600">
                      Joined {new Date(user.joinDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  {user.bio}
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                  Skills
                </h3>
                {user.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            )}
            {activeTab === "connections" && (
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                  Connections
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {user.connections.map((connection, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-50 p-4 rounded-lg transition-shadow duration-300 hover:shadow-md"
                    >
                      <img
                        src={connection.avatar}
                        alt={connection.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {connection.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {connection.role}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "resume" && (
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                  Resume
                </h2>
                <div className="mb-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                    Experience
                  </h3>
                  {user.experience.map((exp, index) => (
                    <div key={index} className="mb-4 bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900">{exp.title}</h4>
                      <p className="text-sm text-gray-600">
                        {exp.company} | {exp.period}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        {exp.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
                    Education
                  </h3>
                  {user.education.map((edu, index) => (
                    <div key={index} className="mb-4 bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-900">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {edu.institution} | {edu.year}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "social" && (
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                  Social Media
                </h2>
                <div className="space-y-4">
                  <a
                    href={user.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-[#0081C9] transition-colors duration-200"
                  >
                    <Linkedin className="mr-2" size={20} />
                    LinkedIn Profile
                  </a>
                  <a
                    href={user.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-[#0081C9] transition-colors duration-200"
                  >
                    <Twitter className="mr-2" size={20} />
                    Twitter Profile
                  </a>
                  <a
                    href={user.socialMedia.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-[#0081C9] transition-colors duration-200"
                  >
                    <GitBranch className="mr-2" size={20} />
                    GitHub Profile
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
