import React from "react";
import { FaBook, FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

const footerNavigation = {
  learning: [
    { name: "Courses", href: "#" },
    { name: "Tutorials", href: "#" },
    { name: "Workshops", href: "#" },
    { name: "Learning Paths", href: "#" },
  ],
  support: [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "FAQ", href: "#" },
    { name: "Community Forums", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Press", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebookF,
    },
    {
      name: "Twitter",
      href: "#",
      icon: FaTwitter,
    },
    {
      name: "GitHub",
      href: "#",
      icon: FaGithub,
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0081C9]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <div className="h-10 w-10 text-[#E1F1FF]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="38"
                  viewBox="0 0 31 38"
                  fill="none"
                >
                  <g clip-path="url(#clip0_961_1609)">
                    <path
                      d="M16.2694 2.05917C16.4463 1.38779 16.7663 0.768623 17.2045 0.249547C16.7923 0.184701 16.4412 0.0935107 16.0767 0.0772991C15.0022 0.0347437 13.9259 -0.017944 12.8515 0.000294015C11.9278 0.0205585 10.8534 1.11282 10.5977 2.18886C10.5845 2.25745 10.5503 2.31946 10.5003 2.36516C10.3916 1.68022 10.5213 1.00947 10.6263 0.279944C9.05378 0.666996 7.50797 1.0196 6.23698 2.12401C5.43736 2.81909 5.3324 3.76341 5.38775 4.78474C5.46281 6.0533 5.5067 7.32456 5.51943 8.59852C5.53088 9.56514 5.53851 10.5297 5.79614 11.468C5.9687 12.1738 6.30607 12.8219 6.77706 13.3526C7.79042 11.8145 8.04996 10.1325 7.79042 8.28848C12.5773 9.57283 17.6027 9.45306 22.3305 7.94195C21.9736 9.74549 22.7408 11.2086 23.4755 12.6595C23.9106 13.5066 24.5595 13.7214 25.4355 13.4134C26.5805 13.0081 27.2809 12.1245 27.6587 10.9573C28.466 8.4668 27.8496 6.34106 26.132 4.5132C24.8324 3.13319 23.2694 2.24155 21.5767 1.53229C20.6225 1.127 19.653 0.764266 18.5881 0.81898C18.1944 0.831204 17.8074 0.930513 17.4518 1.11056C17.0963 1.29061 16.78 1.54743 16.5232 1.86463C16.4698 1.92542 16.4202 1.98824 16.3668 2.04701C16.361 2.05309 16.3458 2.05106 16.2694 2.05917Z"
                      fill="white"
                    />
                    <path
                      d="M17.7129 14.7606C17.7106 14.9522 17.7443 15.1422 17.8119 15.3198C17.8795 15.4974 17.9797 15.6589 18.1068 15.7949C18.2338 15.9309 18.385 16.0386 18.5516 16.1119C18.7183 16.1852 18.897 16.2225 19.0774 16.2217C19.2607 16.2212 19.4422 16.1822 19.6113 16.1069C19.7804 16.0317 19.9338 15.9217 20.0627 15.7833C20.1917 15.6449 20.2936 15.4808 20.3626 15.3004C20.4316 15.12 20.4663 14.927 20.4648 14.7323C20.4583 14.3458 20.3078 13.9779 20.0463 13.709C19.7849 13.4401 19.4337 13.2921 19.0698 13.2975C18.889 13.2944 18.7095 13.3303 18.5422 13.403C18.3748 13.4757 18.2231 13.5838 18.0963 13.7206C17.9694 13.8574 17.87 14.0201 17.8041 14.1989C17.7382 14.3776 17.7072 14.5688 17.7129 14.7606Z"
                      fill="white"
                    />
                    <path
                      d="M12.2941 16.0091C12.4743 16.0112 12.6532 15.9755 12.8204 15.9039C12.9875 15.8323 13.1397 15.7264 13.2682 15.5921C13.3966 15.4578 13.4987 15.2978 13.5687 15.1214C13.6386 14.945 13.675 14.7556 13.6758 14.5642C13.6758 14.3759 13.6405 14.1894 13.5719 14.0157C13.5034 13.842 13.4029 13.6846 13.2765 13.5525C13.15 13.4205 13 13.3165 12.8353 13.2467C12.6705 13.1768 12.4944 13.1425 12.317 13.1457C12.1306 13.1275 11.9426 13.1505 11.765 13.2133C11.5874 13.2761 11.424 13.3774 11.2851 13.5107C11.1463 13.644 11.035 13.8065 10.9583 13.9878C10.8816 14.1692 10.8412 14.3654 10.8396 14.5642C10.838 14.763 10.8753 14.9599 10.9491 15.1426C11.0228 15.3253 11.1315 15.4898 11.2682 15.6256C11.4049 15.7614 11.5667 15.8656 11.7433 15.9316C11.9199 15.9976 12.1074 16.024 12.2941 16.0091Z"
                      fill="white"
                    />
                    <path
                      d="M17.142 18.8013H15.8538C15.2813 18.8013 14.7088 18.8013 14.121 18.8013C13.9149 18.8013 13.8424 18.8864 13.8653 19.1012C13.9454 19.8956 14.8195 20.6149 15.6363 20.5379C16.5065 20.4528 17.1916 19.6868 17.142 18.8013Z"
                      fill="white"
                    />
                    <path
                      d="M28.8047 23.3145L15.568 29.0047V37.4652H25.278L28.8047 23.3145Z"
                      fill="white"
                    />
                    <path
                      d="M28.3008 21.2212V22.7795L15.568 28.7616L28.3008 21.2212Z"
                      fill="white"
                    />
                    <path
                      d="M26.1484 21.6607V20.54L15.5683 28.4695L26.1484 21.6607Z"
                      fill="white"
                    />
                    <path
                      d="M1.85511 23.3145L15.0898 29.0047V37.4652H5.37992L1.85511 23.3145Z"
                      fill="white"
                    />
                    <path
                      d="M2.35702 21.2212V22.7795L15.0898 28.7616L2.35702 21.2212Z"
                      fill="white"
                    />
                    <path
                      d="M4.50969 21.6607V20.54L15.0898 28.4695L4.50969 21.6607Z"
                      fill="white"
                    />
                    <path
                      d="M0.5 37.4648H30.5V37.9998H0.5V37.4648Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_961_1609">
                      <rect
                        width="30"
                        height="38"
                        fill="white"
                        transform="matrix(-1 0 0 1 30.5 0)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span className="ml-3 text-2xl font-bold text-white">
                LearnHub
              </span>
            </div>
            <p className="text-base text-[#E1F1FF]">
              Empowering learners worldwide with accessible, high-quality
              education.
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#E1F1FF] hover:text-[#E1F1FF]"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-white">Learning</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.learning.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-[#E1F1FF] hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-white">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-[#E1F1FF] hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-medium text-white">Company</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-[#E1F1FF] hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-base font-medium text-white">Legal</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-base text-[#E1F1FF] hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[#0081C9] pt-8">
          <p className="text-base text-[#E1F1FF] xl:text-center">
            &copy; 2024 LearnHub, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
