import { Suspense } from 'react';
import Link from 'next/link';

import Container from '../components/Container';
import CurrentProjectCard from '../components/CurrentProjectCard';
import HorizontalSectionWrapper from 'components/HorizontalSectionWrapper';
import VerticalSectionWrapper from 'components/VerticalSectionWrapper';
import ToolsListWrapper from 'components/ToolsListWrapper';
import FreeTemplateCard from 'components/FreeTemplateCard';
import PastProjectCard from 'components/PastProjectCard';
import PhotoGallery from 'components/PhotoGallery';
import RightArrow from 'components/svgs/RightArrow';
import ContactForm from 'components/ContactForm';

const CURRENT_PROJECTS_JSON = [
  {
    title: 'Dialed Accountability',
    description: 'A tool that empowers community leaders to boost member engagement through structured accountability challenges. It streamlines challenge creation, progress tracking, and participant communication to foster meaningful connections.',
    image: '/dialed-accountability.png',
    url: 'https://dialed.tech',
    links: []
  },
  {
    title: 'Personalized Nose Filters',
    description: 'Developing personalized 3D-printed nose filters to help people with allergies breathe better. Using video imaging techniques, we capture detailed nasal measurements to ensure optimal comfort and filtration efficiency.',
    image: '/nose-filters.png',
    url: '',
    links: []
  }];


const PAST_PROJECTS_JSON = [
  {
    title: 'Solopreneur Playground',
    description: 'A community that brings together solopreneurs finding their niche to share inspiration, stories, and challenges to help people discover ways to work that feel like play.',
    image: '/solopreneur-playground-logo.png',
    url: 'https://solopreneurplayground.com/',
    links: []
  },
  {
    title: 'Oasis',
    description: 'Founded a software develpoment mentorship organization at Northeastern that helps students build their first software projects.',
    image: '/oasis-logo.png',
    url: 'https://oasisneu.com/',
    links: []
  },
  {
    title: 'Office Hours App',
    description: 'Built a web app that manages the queueing system for students and TA\'s and provides analytics to professors and administrators at Northeastern.',
    image: '/sandbox-logo.png',
    links: [{
      icon: "News",
      url: 'https://news.northeastern.edu/2021/02/02/this-app-helps-students-get-more-face-time-with-professors/'
    },
    {
      icon: "Github",
      url: 'https://github.com/sandboxnu/office-hours'
    }]
  }
];

const FREE_TEMPLATES = [
  {
    name: "Notion-powered Photo Journal",
    description: "Step-by-step guide on how to create a photo journal website powered by a simple Notion database.",
    url: "https://willstenzel.gumroad.com/l/notion-powered-photo-journal",
    date: "March 12, 2023"
  },
  {
    name: "Simple TikTok Notification System",
    description: "Lets people signup via text msg (for those who don't use TikTok) and get notified when I post new content.",
    url: "https://willstenzel.gumroad.com/l/simple-tik-tok-notification-system",
    date: "July 3, 2022"
  },
  {
    name: "Oasis Task Management Bundle",
    description: "Notion template for a team managing tasks and repeating events.",
    url: "https://willstenzel.gumroad.com/l/oasis-task-management-bundle",
    date: "June 1, 2022"
  },
  {
    name: "Super-Charged Daily Journal Notion Template",
    description: "Notion journal databases that are searchable with the goal to promote greater reflection and connection.",
    url: "https://willstenzel.gumroad.com/l/super-charged-dailly-journal-notion-template",
    date: "March 31, 2022"
  },
  {
    name: "Cohort Management System Toolkit",
    description: "A system that supports team projects by integrating Google Forms and Notion, creating a cohort management dashboard and a website.",
    url: "https://willstenzel.gumroad.com/l/cohort-management-system-toolkit",
    date: "December 8, 2021"
  },
];

export type Tool = {
  name: string;
  tags: string[];
  description: string;
  image?: string;
  imageLight?: string;
  imageDark?: string;
};

const TOOLS: Tool[] = [
  {
    name: 'Notion',
    tags: ['Notes', 'MVPs', 'Project Management'],
    description: 'Notion is a glorious tool. I use it to organize all my projects, tasks, and notes. Its database functionality and API make it great for building MVPs.',
    imageLight: 'notion-light.png',
    imageDark: 'notion-dark.png',
  },
  {
    name: 'Super',
    tags: ['Hosting', 'Static Sites'],
    description: "Super is a tool that lets you turn a Notion page into a website. It's great for creating quick landing pages, wikis, and how-to guides.",
    image: 'super-logo.png',
  },
  {
    name: 'Visual Studio Code',
    tags: ['Development'],
    description: "Visual Studio Code is my go to IDE. It's lightweight, fast, and has a great plugin ecosystem.",
    imageLight: 'vs-code-light.png',
    imageDark: 'vs-code-dark.png',
  },
  {
    name: 'Next.js',
    tags: ['React', 'Static Sites'],
    description: "Next.js is a React framework that makes it easy to build static sites and serverless functions. I use it to build this website.",
    imageLight: 'nextjs-light.png',
    imageDark: 'nextjs-dark.png',
  },
  {
    name: 'Tensorflow.js',
    tags: ['Machine Learning', 'AI'],
    description: "Tensorflow.js is a library that makes it easy to build machine learning models in the browser. I'm currently using it to help create custom nose filters.",
    image: 'tensorflow.png',
  },
  {
    name: 'Miro',
    tags: ['Whiteboarding', 'Flowcharts'],
    description: "Miro is a tool that lets you create virtual whiteboards. It's great for creating flowcharts and brainstorming ideas.",
    image: 'miro.png',
  },
  {
    name: 'Tally Forms',
    tags: ['Forms', 'Surveys'],
    description: "Tally Forms is a tool that lets you create forms and surveys with a simple Notion style editor. It makes creating forms a breeze.",
    imageLight: 'tally-forms-light.png',
    imageDark: 'tally-forms-dark.png',
  },
  {
    name: 'Loops',
    tags: ['Email Marketing', 'Newsletters'],
    description: "Loops is a magical email tool. It's has an simple opnionated interface that makes it easy to create beautiful emails and track performance.",
    imageLight: 'loops-light.png',
    imageDark: 'loops-dark.png',
  },
];


export default function Home() {
  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pb-32">
          <div className="flex flex-col pr-4">
            <h1 className="font-bold text-2xl sm:text-4xl tracking-tight mb-2 text-black dark:text-white">
              Hi! I’m{' '}
              <span className="text-violet-600 dark:text-purple-400">
                Will Stenzel
              </span>
              , I help mindful innovators turn their ideas into reality.
            </h1>
            <p className="text-gray-500 dark:text-gray-200 text-xl mb-8">
              As an engineer, I'm passionate about using modern tools to build dynamic products and help businesses scale.
            </p>
          </div>

          <VerticalSectionWrapper id="current-projects">
            <h1 className="font-bold text-xl w-60 sm:text-3xl tracking-tight mb-1 mt-4 text-black dark:text-white">
              Current Projects
            </h1>
            <div className="flex flex-col gap-2">
              {CURRENT_PROJECTS_JSON.map(e => <CurrentProjectCard title={e.title} key={e.title} description={e.description} image={e.image} url={e.url} links={e.links} />)}
            </div>
          </VerticalSectionWrapper>

          <VerticalSectionWrapper id="past-projects">
            <h1 className="font-bold text-xl w-60 sm:text-3xl tracking-tight mb-4 text-black dark:text-white">
              Past Projects
            </h1>
            <div className="flex gap-4 flex-col sm:flex-row sm:items-stretch">
              {PAST_PROJECTS_JSON.map(e => <PastProjectCard title={e.title} key={e.title} description={e.description} image={e.image} url={e.url} links={e.links} />)}
            </div>
          </VerticalSectionWrapper>

          <HorizontalSectionWrapper id="philosophy">
            <h1 className="font-bold text-xl w-60 sm:text-3xl tracking-tight mb-1 mr-14 text-black dark:text-white">
              Philosophy
            </h1>
            <div className="text-black dark:text-white">
              With rapidly changing business needs, the key to success is <b>adaptability</b>. Until recently, the only way to accomplish this was by building an application from scratch with a team of developers. Now, by thoughtfully leveraging <b>code and no-code</b> solutions, individuals or small teams can design products that <b>evolve quickly</b> while providing a <b>great user experience</b>.
            </div>
          </HorizontalSectionWrapper>

          <VerticalSectionWrapper id="tools">
            <h1 className="font-bold text-xl w-60 sm:text-3xl tracking-tight mb-1 text-black dark:text-white">
              Tools
            </h1>
            <p className="text-gray-500 dark:text-gray-200 text-lg sm:text-xl mb-6">
              These are some tools I enjoy using
            </p>
            <ToolsListWrapper tools={TOOLS} />
          </VerticalSectionWrapper>

          <VerticalSectionWrapper id="templates">
            <h1 className="font-bold mb-1 text-xl sm:text-3xl tracking-tight text-black dark:text-white">
              Free Templates
            </h1>
            <p className="text-gray-500 dark:text-gray-200 text-lg sm:text-xl mb-6">
              {"These are templates and systems that I’ve created using Notion to streamline or simplify my work. Feel free to use them and adapt them to your own needs."}
            </p>
            {FREE_TEMPLATES.map(e => <FreeTemplateCard title={e.name} description={e.description} key={e.name} url={e.url} date={e.date} />)}
          </VerticalSectionWrapper>

          <VerticalSectionWrapper id="photos">
            <h1 className="font-bold text-xl mb-1 w-60 sm:text-3xl tracking-tight text-black dark:text-white">
              Photos
            </h1>
            <p className="text-gray-500 dark:text-gray-200 text-lg sm:text-xl mb-6">
              {"Documenting my life is something I really enjoy. Here are some photos from the past week."}
            </p>
            <PhotoGallery />
            <Link
              href="https://photos.willstenzel.com/"
              target={'_blank'}
              className="flex items-center mt-6 text-gray-600 dark:text-gray-300 leading-7 rounded-lg sm:hover:text-gray-800 sm:dark:hover:text-gray-200 transform sm:hover:scale-[1.04] transition-all h-6">
              <>
                {'See more photos'}
                <RightArrow className="h-6 w-6 ml-1" />
              </>
            </Link>
          </VerticalSectionWrapper>

          <VerticalSectionWrapper id="contact">
            <h1 className="font-bold text-xl w-60 sm:text-3xl tracking-tight mb-1 text-black dark:text-white">
              Contact
            </h1>
            <p className="text-gray-500 dark:text-gray-200 text-lg sm:text-xl mb-6">
              If you have any questions or would like to work together, feel free to reach out!
            </p>
            <ContactForm />
          </VerticalSectionWrapper>
        </div>
      </Container >
    </Suspense >
  );
}
