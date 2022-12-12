import { Suspense } from 'react';
import Link from 'next/link';

import Container from '../components/Container';
import CurrentProjectCard from '../components/CurrentProjectCard';
import HorizontalSectionWrapper from 'components/HorizontalSectionWrapper';
import VerticalSectionWrapper from 'components/VerticalSectionWrapper';
import FreeResourceCard from 'components/FreeResourceCard';
import PastProjectCard from 'components/PastProjectCard';
import PhotoGallery from 'components/PhotoGallery';
import RightArrow from 'components/svgs/RightArrow';
import ConactCard from 'components/ConactCard';
import ToolsList from 'components/ToolsList';
import ProfilePhoto from 'components/tooltips/ProfilePhoto';
import ModernTools from 'components/tooltips/ModernTools';
import ToolTip from 'components/Tooltip';
import useScreenWidth from 'hooks/useScreenWidth';

const CURRENT_PROJECTS_JSON = [
  {
    title: 'Supersynchronous',
    description: 'I work as an operations developer in the Notion pod at Supersynchronous. We build internal tools which help businesses scale.',
    image: '/supsync.jpeg',
    url: 'https://supsync.com/',
    links: [{
      icon: 'Twitter',
      url: 'https://twitter.com/@supsync'
    }]
  },
  {
    title: 'Solopreneur Playground',
    description: 'Solopreneur Playground is a community that brings together solopreneurs finding their niche to share inspiration, stories, and challenges to help people discover ways to work that feel like play.',
    image: '/solopreneur-playground.png',
    url: '',
    links: []
  }];

const PAST_PROJECTS_JSON = [
  {
    title: 'Oasis',
    description: 'Founded a software develpoment mentorship organisation at Northeastern that helps students build their first software projects.',
    image: '/oasis-logo.png',
    url: 'https://oasisneu.com/',
    links: []
  },
  {
    title: 'Office Hours App',
    description: 'Built a web app that manages the queueing system for students and TA\'s and provides analytics to professors and administrators at Northeastern.',
    image: '/sandbox-logo.png',
    url: 'https://info.khouryofficehours.com/',
    links: [{
      icon: "News",
      url: 'https://news.northeastern.edu/2021/02/02/this-app-helps-students-get-more-face-time-with-professors/'
    },
    {
      icon: "Github",
      url: 'https://github.com/sandboxnu/office-hours'
    }]
  },
  {
    title: 'Prota Ventures',
    description: 'Built knowledge infrastructure to enable the organization to scale more efficiently and automated repetitive tasks.',
    image: '/prota-logo.png',
    url: 'https://www.protaventures.com/',
    links: []
  }
];

const FREE_RESOURCES = [
  {
    name: "Simple TikTok Notification System",
    url: "https://willstenzel.gumroad.com/l/cohort-management-system-toolkit",
    date: "July 3, 2022"
  },
  {
    name: "Oasis Task Management Bundle",
    url: "https://willstenzel.gumroad.com/l/oasis-task-management-bundle",
    date: "June 1, 2022"
  },
  {
    name: "Super-Charged Daily Journal Notion Template",
    url: "https://willstenzel.gumroad.com/l/super-charged-dailly-journal-notion-template",
    date: "March 31, 2022"
  },
  {
    name: "Cohort Management System Toolkit",
    url: "https://willstenzel.gumroad.com/l/cohort-management-system-toolkit",
    date: "December 8, 2021"
  },
];

export type Tool = {
  name: string;
  tags: string[];
  description: string;
  image: string;
};

const TOOLS: Tool[] = [
  {
    name: 'Notion',
    tags: ['Notes', 'MVPs', 'Project Management'],
    description: 'Notion is a glorious tool. I use it to organize and manage all my projects, tasks, and notes. Its database functionality and public API make it great for prototyping applications or building MVPs.',
    image: 'notion-logo.png',
  },
  {
    name: 'Super',
    tags: ['Hosting', 'Static Sites'],
    description: "Super is a tool that lets you turn a Notion page into a website. It's great for creating quick landing pages, wikis, and how-to guides.",
    image: 'super-logo.png',
  },
  {
    name: 'Github Copilot',
    tags: ['AI', 'Code Gen', 'Development'],
    description: "Github Co-pilot makes the tedious parts of coding a breeze. It autocompletes API calls, generates code snippets, and keeps me from having to google things.",
    image: 'github-copilot-logo.png',
  },
  {
    name: 'Vercel',
    tags: ['Hosting', 'Serverless Functions'],
    description: "Vercel makes it super easy to host websites (like this one!) and deploy serverless function which I use for complex automations.",
    image: 'vercel-logo.png',
  },
];


export default function Home() {
  const width = useScreenWidth();
  const isMobile = width < 768;

  return (
    <Suspense fallback={null}>
      <Container>
        <div className="flex flex-col justify-center items-start max-w-3xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <div className="flex flex-col pr-4">
            <h1 className="font-bold text-2xl md:text-4xl tracking-tight mb-2 text-black dark:text-white">
              Hi! I’m{' '}
              <span className="text-violet-600 dark:text-purple-400">
                Will Stenzel
              </span>
              {/* <ToolTip tooltip={<ProfilePhoto />}
                offset={44}>
                <span className="text-violet-600 dark:text-purple-400">
                  Will Stenzel
                </span>
              </ToolTip> */}
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
            {isMobile ? 
              // map half of the tools to one tools card and the other half to another
              <div className="flex flex-col gap-4">
                <ToolsList tools={TOOLS.slice(0, Math.ceil(TOOLS.length / 2))} />
                <ToolsList tools={TOOLS.slice(Math.ceil(TOOLS.length / 2))} />
              </div>
              :
              <ToolsList tools={TOOLS} />
            }
          </VerticalSectionWrapper>

          <VerticalSectionWrapper id="resources">
            <h1 className="font-bold mb-1 text-xl sm:text-3xl tracking-tight text-black dark:text-white">
              Free Resources
            </h1>
            <p className="text-gray-500 dark:text-gray-200 text-lg sm:text-xl mb-6">
              {"Here are some free resources I've put together"}
            </p>
            {FREE_RESOURCES.map(e => <FreeResourceCard title={e.name} key={e.name} url={e.url} date={e.date} />)}
          </VerticalSectionWrapper>

          <VerticalSectionWrapper id="photos">
            <h1 className="font-bold text-xl mb-1 w-60 sm:text-3xl tracking-tight text-black dark:text-white">
              Photos
            </h1>
            <p className="text-gray-500 dark:text-gray-200 text-lg sm:text-xl mb-6">
              {"Documenting my life is something I really enjoy. Here are some photos from the past week :)"}
            </p>
            <PhotoGallery />
            <Link
              href="https://photos.willstenzel.com/"
              target={'_blank'}
              className="flex items-center mt-6 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transform hover:scale-[1.04] transition-all h-6">
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
              I'm always looking for new opportunities to work with passionate people.
            </p>
            <div className="flex flex-col md:flex-row gap-6">
              <ConactCard title="@WillStenzel" url="https://twitter.com/willstenzel" description="If you'd like to quickly connect, the best place is on Twitter." />
              <ConactCard title="stenzel.will@gmail.com" url="mailto:stenzel.will@gmail.com" description="If you want to work together, feel free to send me an email." />
            </div>
          </VerticalSectionWrapper>
        </div>
      </Container >
    </Suspense >
  );
}
