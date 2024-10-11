"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Navbar from "../components/Navbar";

const teamMembers = [
  {
    name: "Samuel Mathe",
    position: "Founder",
    imageUrl: "/images/mepfp.jpg",
    description: "Superteam INDIA Contributer<br/>Trubin3 Graduate",
    socials: {
      twitter: "https://twitter.com/sams_0214",
      github: "https://github.com/samuel-0214",
      email: "mailto:samuelmathe0214@gmail.com",
    },
  },
  {
    name: "Chakradhar Komati",
    position: "Founder",
    imageUrl: "/images/chakpfp.jpg",
    description: "Superteam INDIA Member<br/>Turbin3 Graduate",
    socials: {
      twitter: "https://twitter.com/chakradhar_0908",
      github: "https://github.com/CHAKRADHAR98",
      email: "mailto:chakradhar@example.com",
    },
  },
];

const TeamPage = () => {
  return (
    <div className="container mx-auto py-20 px-6">
        <Navbar />
      <motion.h1
        className="text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white py-14"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        The DUO behind all the magic
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8 transform hover:scale-105 transition duration-300 ease-in-out"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <Image
              src={member.imageUrl}
              alt={member.name}
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
              {member.name}
            </h2>
            <p className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-4">
              {member.position}
            </p>
            <p
              className="text-gray-600 dark:text-gray-300 text-center mb-4"
              dangerouslySetInnerHTML={{ __html: member.description }}
            />
            <div className="flex space-x-4 mt-4">
              <a
                href={member.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray dark:text-gray hover:text-blue-700 dark:hover:text-gray-400 transition"
              >
                <FaXTwitter size={24} />
              </a>
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 transition"
              >
                <FaGithub size={24} />
              </a>
              <a
                href={member.socials.email}
                className="text-red-500 dark:text-red-400 hover:text-red-700 dark:hover:text-red-500 transition"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
