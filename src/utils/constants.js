import logo1 from "../assets/logo-banner/logo1.svg";
import logo2 from "../assets/logo-banner/logo2.svg";
import logo3 from "../assets/logo-banner/logo3.svg";
import logo4 from "../assets/logo-banner/logo4.svg";

import branchIcon from "../assets/features/branch.svg";
import flagIcon from "../assets/features/flag.svg";
import globeIcon from "../assets/features/globe.svg";
import graphicCircleIcon from "../assets/features/graphic-circle.svg";
import hashIcon from "../assets/features/hash.svg";
import thumbsUpIcon from "../assets/features/thumbs-up.svg";


import coloredArrowIcon from "../assets/svg/colored-arrow.svg";
import arrowIcon from "../assets/svg/arrow.svg";

import plan1 from "../assets/plans/individual-plan.svg";
import plan2 from "../assets/plans/team-plan.svg";
import plan3 from "../assets/plans/enterprise-plan.svg";

import facebookIcon from "../assets/footer/facebook.svg";
import linkedinIcon from "../assets/footer/linkedin.svg";
import twitterIcon from "../assets/footer/twitter.svg";
import youtubeIcon from "../assets/footer/youtube.svg";

export const SOCIAL_LINKS = [
    { name: "Facebook", icon: facebookIcon, url: "https://www.facebook.com" },
    { name: "LinkedIn", icon: linkedinIcon, url: "https://www.linkedin.com" },
    { name: "Twitter", icon: twitterIcon, url: "https://www.twitter.com" },
    { name: "YouTube", icon: youtubeIcon, url: "https://www.youtube.com" },
];


export const ANIMATED_LOGOS = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo1,
    logo2,
    logo3,
    logo4,
    logo1,
    logo2,
    logo3,
    logo4,
];

export const FEATURES = [
    {
        icon: thumbsUpIcon,
        heading: "Cross-Platform Accessibility",
        description: `Whether you're on your desktop, tablet, or smartphone, 
                    SmartNotes is accessible across all devices. Work seamlessly 
                    on the go and never miss a beat.`,
    },
    {
        icon: globeIcon,
        heading: "Customizable Templates",
        description: `Create custom templates for your recurring tasks or projects to save 
                    time and ensure consistency. Tailor SmartNotes to fit your unique workflow 
                    and preferences.`,
    },
    {
        icon: flagIcon,
        heading: "Secure Cloud Storage",
        description: `Rest easy knowing that your notes are securely stored in the cloud. 
                    Access your information from any device, anytime, without worrying about 
                    losing important data.`,
    },
    {
        icon: graphicCircleIcon,
        heading: "Real-Time Collaboration",
        description: `Collaborate seamlessly with your team members or classmates 
                    in real-time on shared notes and projects.`,
    },
    {
        icon: hashIcon,
        heading: "AI-Powered Organization",
        description: `Our AI-powered organization feature categorizes and prioritizes your notes, 
         making it easy to find what you need when you need it.`,
    },
    {
        icon: branchIcon,
        heading: "Integrations",
        description: `Connect SmartNotes with your favorite productivity tools like Google Drive, 
        Trello, and Slack. Streamline your workflow by syncing data across platforms 
        and enhancing collaboration.`,
    },
];

export const FAQ_ITEMS = [
    {
        id: 1,
        question: "What is SmartNotes?",
        answerHeading: "How do I get started with SmartNotes?",
        answer: `Getting started with SmartNotes is easy! Simply visit
               our website, sign up for a free trial, and start exploring 
               the features. Our intuitive interface and comprehensive onboarding 
               materials will guide you through the process.`,
    },
    {
        id: 2,
        question: "What are the key features of SmartNotes?",
        answerHeading: "How do I get started with SmartNotes?",
        answer: `Getting started with SmartNotes is easy! Simply visit
               our website, sign up for a free trial, and start exploring 
               the features. Our intuitive interface and comprehensive onboarding 
               materials will guide you through the process.`,
    },
    {
        id: 3,
        question: "How much does SmartNotes cost?",
        answerHeading: "How do I get started with SmartNotes?",
        answer: `Getting started with SmartNotes is easy! Simply visit
               our website, sign up for a free trial, and start exploring 
               the features. Our intuitive interface and comprehensive onboarding 
               materials will guide you through the process.`,
    },
    {
        id: 4,
        question: "Who is SmartNotes for?",
        answerHeading: "How do I get started with SmartNotes?",
        answer: `Getting started with SmartNotes is easy! Simply visit
               our website, sign up for a free trial, and start exploring 
               the features. Our intuitive interface and comprehensive onboarding 
               materials will guide you through the process.`,
    },
    {
        id: 5,
        question: "What is SmartNotes?",
        answerHeading: "How do I get started with SmartNotes?",
        answer: `Getting started with SmartNotes is easy! Simply visit
               our website, sign up for a free trial, and start exploring 
               the features. Our intuitive interface and comprehensive onboarding 
               materials will guide you through the process.`,
    },
];

export const FOOTER_LINKS = [
    {
        heading: "Product",
        subheadings: ["About", "Features", "Pricing", "Integrations", "FAQs"]
    },
    {
        heading: "Company",
        subheadings: ["Our Story", "Team", "Careers", "Press", "Contact Us"]
    },
    {
        heading: "Resources",
        subheadings: ["Blog", "Webinars", "Case Studies", "Templates", "Help Center"]
    },
    {
        heading: "Legal",
        subheadings: ["Terms of Service", "Privacy Policy", "Cookie Policy", "Acceptable Use", "Refund Policy"]
    }
];

export const PLANS = [
    {
        darkMode: false,
        plan: "Individual Plan",
        planIcon: plan1,
        planPrice: 9.99,
        bullets: [
            "Real-time collaboration",
            "AI-powered organization",
            "Customizable templates",
            "5GB cloud storage",
            "Basic integrations",
        ],
        CallToAction: "Start Free Trial",
        ctaIcon: coloredArrowIcon
    },
    {
        darkMode: true,
        plan: "Team Plan",
        planIcon: plan2,
        planPrice: 19.99,
        bullets: [
            "Everything in the Individual Plan",
            "Unlimited cloud storage",
            "Advanced integrations",
            "Team management and permissions",
            "Shared templates and note libraries",
        ],
        CallToAction: "Start Free Trial", ctaIcon: arrowIcon
    },
    {
        darkMode: false,
        plan: "Enterprise Plan",
        planIcon: plan3,
        bullets: [
            "Everything in the Team Plan",
            "Dedicated account manager",
            "Enterprise-grade security",
            "Customized onboarding",
            "Advanced analytics",
        ],
        CallToAction: "Contact support", ctaIcon: coloredArrowIcon
    },
];