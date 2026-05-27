export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: '精通' | '熟练' | '了解';
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    tagline: string;
    avatar?: string;
  };
  about: string;
  experiences: Experience[];
  skillCategories: SkillCategory[];
  projects: Project[];
  contact: {
    email: string;
    phone?: string;
    location?: string;
    socialLinks: SocialLink[];
  };
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: '张三',
    title: '前端开发工程师',
    tagline: '热爱技术，专注于创造优雅的用户体验',
    avatar: '/avatar.jpg',
  },
  about: `我是一名拥有3年经验的前端开发工程师，专注于使用 React、Next.js 和 TypeScript 构建现代化 Web 应用。

我热衷于探索新技术，关注前端生态的发展趋势。在工作中，我注重代码质量和用户体验，努力将复杂的需求转化为简洁、直观的界面。

除了技术工作，我还喜欢分享知识，参与开源项目，并与社区互动。我相信技术的价值在于解决实际问题，提升人们的生活质量。`,
  experiences: [
    {
      company: 'ABC 科技公司',
      position: '高级前端开发工程师',
      period: '2023年3月 - 至今',
      description: [
        '负责公司核心产品的前端架构设计与开发',
        '主导前端技术栈升级，推动 React 18 和 Next.js 的应用',
        '优化页面性能，将首屏加载时间降低 40%',
        '建立前端代码规范，推行 Code Review 流程',
      ],
    },
    {
      company: 'XYZ 互联网公司',
      position: '前端开发工程师',
      period: '2021年6月 - 2023年2月',
      description: [
        '参与多个电商项目的开发，负责用户界面实现',
        '使用 React 和 TypeScript 构建可复用的组件库',
        '实现响应式布局，确保多端一致性体验',
        '与设计师和产品经理紧密协作，提升用户满意度',
      ],
    },
    {
      company: 'DEF 工作室',
      position: 'Web 开发实习生',
      period: '2020年6月 - 2021年5月',
      description: [
        '协助前端页面的开发与维护',
        '学习并掌握 HTML、CSS、JavaScript 基础',
        '参与小型项目，积累实战经验',
      ],
    },
  ],
  skillCategories: [
    {
      category: '前端框架',
      skills: [
        { name: 'React', level: '精通' },
        { name: 'Next.js', level: '熟练' },
        { name: 'Vue', level: '熟练' },
        { name: 'TypeScript', level: '精通' },
      ],
    },
    {
      category: '样式与UI',
      skills: [
        { name: 'Tailwind CSS', level: '精通' },
        { name: 'CSS3', level: '熟练' },
        { name: 'Sass/Less', level: '熟练' },
      ],
    },
    {
      category: '工具与平台',
      skills: [
        { name: 'Git', level: '精通' },
        { name: 'Docker', level: '了解' },
        { name: 'Vercel', level: '熟练' },
        { name: 'Webpack', level: '熟练' },
      ],
    },
  ],
  projects: [
    {
      name: '在线协作白板',
      description: '一个支持多人实时协作的在线白板应用，支持绘图、标注和实时同步。',
      technologies: ['React', 'Canvas', 'WebSocket', 'Node.js'],
      link: 'https://github.com/example/whiteboard',
    },
    {
      name: '个人博客系统',
      description: '基于 Next.js 和 Markdown 的静态博客系统，支持 SEO 优化和响应式设计。',
      technologies: ['Next.js', 'Markdown', 'Tailwind CSS', 'Vercel'],
      link: 'https://github.com/example/blog',
    },
    {
      name: '电商后台管理系统',
      description: '完整的电商后台解决方案，包含商品管理、订单处理、数据统计等功能。',
      technologies: ['React', 'Ant Design', 'Node.js', 'MySQL'],
      link: 'https://github.com/example/admin',
    },
  ],
  contact: {
    email: 'zhangsan@example.com',
    phone: '138-0013-8000',
    location: '北京市朝阳区',
    socialLinks: [
      {
        platform: 'GitHub',
        url: 'https://github.com/zhangsan',
        icon: 'github',
      },
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com/in/zhangsan',
        icon: 'linkedin',
      },
      {
        platform: 'Twitter',
        url: 'https://twitter.com/zhangsan',
        icon: 'twitter',
      },
    ],
  },
};